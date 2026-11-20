import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { Task, TaskInput } from "../types";
import { useTasks } from "../use-tasks";
import { Dashboard } from "./Dashboard";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { EmptyState } from "./EmptyState";
import { FeedbackMessage, showError, showSuccess } from "./FeedbackMessage";
import { Header } from "./Header";
import { TaskDetails } from "./TaskDetails";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

interface FormState {
  open: boolean;
  task: Task | null;
  session: number;
}

export function TasksPage() {
  const { tasks, stats, loading, error, reload, createTask, updateTask, toggleTask, deleteTask } =
    useTasks();
  // Each dialog keeps its last task while closing so the closing animation keeps its content.
  const [form, setForm] = useState<FormState>({ open: false, task: null, session: 0 });
  const [details, setDetails] = useState<{ open: boolean; id: string | null }>({
    open: false,
    id: null,
  });
  const [removal, setRemoval] = useState<{ open: boolean; task: Task | null }>({
    open: false,
    task: null,
  });

  const detailsTask = tasks.find((t) => t.id === details.id) ?? null;
  const editingTask = form.task;

  const closeForm = () => setForm((f) => ({ ...f, open: false }));
  const closeDetails = () => setDetails((d) => ({ ...d, open: false }));
  const openCreate = () => setForm((f) => ({ open: true, task: null, session: f.session + 1 }));
  const openEdit = (task: Task) => {
    closeDetails();
    setForm((f) => ({ open: true, task, session: f.session + 1 }));
  };
  const askDelete = (task: Task) => {
    closeDetails();
    setRemoval({ open: true, task });
  };

  async function handleSubmit(input: TaskInput) {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, input);
        showSuccess("Tarefa atualizada", `“${input.title.trim()}” foi salva com sucesso.`);
      } else {
        await createTask(input);
        showSuccess("Tarefa cadastrada", `“${input.title.trim()}” foi adicionada à lista.`);
      }
      closeForm();
    } catch (requestError) {
      showError(
        "Não foi possível salvar",
        requestError instanceof Error ? requestError.message : "Tente novamente.",
      );
    }
  }

  async function handleToggle(task: Task) {
    try {
      await toggleTask(task.id);
      if (task.status === "pendente")
        showSuccess("Tarefa concluída", `“${task.title}” foi concluída.`);
      else showSuccess("Tarefa reaberta", `“${task.title}” voltou para pendentes.`);
    } catch (requestError) {
      showError(
        "Não foi possível alterar a tarefa",
        requestError instanceof Error ? requestError.message : "Tente novamente.",
      );
    }
  }

  async function handleDelete(task: Task) {
    try {
      await deleteTask(task.id);
      setRemoval((r) => ({ ...r, open: false }));
      showSuccess("Tarefa excluída", `“${task.title}” foi removida da lista.`);
    } catch (requestError) {
      showError(
        "Não foi possível excluir",
        requestError instanceof Error ? requestError.message : "Tente novamente.",
      );
    }
  }

  return (
    <div className="min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:px-8">
        <Header onNewTask={openCreate} />
        <main id="conteudo" className="flex flex-col gap-10" tabIndex={-1}>
          <Dashboard stats={stats} />
          {loading ? (
            <p
              role="status"
              className="rounded-xl border border-border bg-card px-4 py-6 text-center text-sm text-muted-foreground"
            >
              Carregando tarefas...
            </p>
          ) : error ? (
            <div className="grid gap-3 rounded-xl border border-destructive/30 bg-card px-4 py-6 text-center">
              <FeedbackMessage variant="error">{error}</FeedbackMessage>
              <Button
                type="button"
                variant="outline"
                onClick={() => void reload()}
                className="mx-auto"
              >
                Tentar novamente
              </Button>
            </div>
          ) : tasks.length === 0 ? (
            <EmptyState onNewTask={openCreate} />
          ) : (
            <TaskList
              tasks={tasks}
              onView={(t) => setDetails({ open: true, id: t.id })}
              onEdit={openEdit}
              onDelete={askDelete}
              onToggle={handleToggle}
            />
          )}
        </main>
        <footer className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          As tarefas são armazenadas no banco de dados configurado pelo backend.
        </footer>
      </div>

      <TaskForm
        open={form.open}
        task={editingTask}
        session={form.session}
        onOpenChange={(open) => !open && closeForm()}
        onSubmit={handleSubmit}
      />
      <TaskDetails
        open={details.open}
        task={detailsTask}
        onOpenChange={(open) => !open && closeDetails()}
        onEdit={openEdit}
        onDelete={askDelete}
      />
      <DeleteConfirmation
        open={removal.open}
        task={removal.task}
        onCancel={() => setRemoval((r) => ({ ...r, open: false }))}
        onConfirm={handleDelete}
      />
    </div>
  );
}
