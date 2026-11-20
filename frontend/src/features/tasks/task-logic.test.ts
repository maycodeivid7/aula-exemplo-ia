import { describe, expect, it } from "vitest";

import { DEMO_TASKS } from "./mock-data";
import { emptyTaskInput, getStats, tasksReducer, validateTask } from "./task-logic";

describe("regras das tarefas", () => {
  it("começa com pelo menos cinco tarefas de demonstração, pendentes e concluídas", () => {
    expect(DEMO_TASKS.length).toBeGreaterThanOrEqual(5);
    expect(DEMO_TASKS.some((t) => t.status === "pendente")).toBe(true);
    expect(DEMO_TASKS.some((t) => t.status === "concluida")).toBe(true);
  });

  it("exige título preenchido (espaços não contam)", () => {
    expect(validateTask({ ...emptyTaskInput(), title: "   " }).title).toBeDefined();
    expect(validateTask({ ...emptyTaskInput(), title: "Estudar" }).title).toBeUndefined();
  });

  it("nova tarefa começa como Pendente e entra na lista", () => {
    const result = tasksReducer([], {
      type: "create",
      id: "x",
      createdAt: "2026-11-19T00:00:00",
      input: { ...emptyTaskInput(), title: "Nova", status: "concluida" },
    });
    expect(result).toHaveLength(1);
    expect(result[0]?.status).toBe("pendente");
  });

  it("concluir e reabrir alternam a situação", () => {
    const done = tasksReducer(DEMO_TASKS, { type: "toggle", id: "demo-1" });
    expect(done.find((t) => t.id === "demo-1")?.status).toBe("concluida");
    const reopened = tasksReducer(done, { type: "toggle", id: "demo-1" });
    expect(reopened.find((t) => t.id === "demo-1")?.status).toBe("pendente");
  });

  it("editar atualiza os dados da tarefa", () => {
    const result = tasksReducer(DEMO_TASKS, {
      type: "update",
      id: "demo-2",
      input: { title: "Título novo", description: "", dueDate: "", status: "concluida" },
    });
    const task = result.find((t) => t.id === "demo-2");
    expect(task?.title).toBe("Título novo");
    expect(task?.status).toBe("concluida");
  });

  it("excluir remove a tarefa e os indicadores acompanham", () => {
    const before = getStats(DEMO_TASKS);
    const result = tasksReducer(DEMO_TASKS, { type: "delete", id: "demo-4" });
    const after = getStats(result);
    expect(after.total).toBe(before.total - 1);
    expect(after.done).toBe(before.done - 1);
    expect(after.pending).toBe(before.pending);
  });
});
