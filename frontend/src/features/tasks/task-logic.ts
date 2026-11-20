import type { Task, TaskInput, TaskStatus } from "./types";

/** Regras puras de gerenciamento de tarefas, separadas da apresentação. */

export const TITLE_REQUIRED_MESSAGE = "Informe o título da tarefa.";

export function emptyTaskInput(): TaskInput {
  return { title: "", description: "", dueDate: "", status: "pendente" };
}

export function taskToInput(task: Task): TaskInput {
  return {
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    status: task.status,
  };
}

export interface ValidationErrors {
  title?: string;
}

export function validateTask(input: TaskInput): ValidationErrors {
  const errors: ValidationErrors = {};
  if (input.title.trim() === "") errors.title = TITLE_REQUIRED_MESSAGE;
  return errors;
}

function normalize(input: TaskInput): TaskInput {
  return {
    title: input.title.trim(),
    description: input.description.trim(),
    dueDate: input.dueDate,
    status: input.status,
  };
}

export type TaskAction =
  | { type: "create"; id: string; createdAt: string; input: TaskInput }
  | { type: "update"; id: string; input: TaskInput }
  | { type: "toggle"; id: string }
  | { type: "delete"; id: string };

export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "create":
      return [
        {
          id: action.id,
          createdAt: action.createdAt,
          ...normalize(action.input),
          // Toda tarefa nova começa como pendente.
          status: "pendente",
        },
        ...tasks,
      ];
    case "update":
      return tasks.map((t) => (t.id === action.id ? { ...t, ...normalize(action.input) } : t));
    case "toggle":
      return tasks.map((t) =>
        t.id === action.id
          ? { ...t, status: (t.status === "pendente" ? "concluida" : "pendente") as TaskStatus }
          : t,
      );
    case "delete":
      return tasks.filter((t) => t.id !== action.id);
  }
}

export interface TaskStats {
  total: number;
  pending: number;
  done: number;
}

export function getStats(tasks: Task[]): TaskStats {
  const done = tasks.filter((t) => t.status === "concluida").length;
  return { total: tasks.length, pending: tasks.length - done, done };
}
