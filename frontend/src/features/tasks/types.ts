export type TaskStatus = "pendente" | "concluida";

export interface Task {
  id: string;
  title: string;
  description: string;
  /** Data no formato AAAA-MM-DD, ou string vazia quando não informada. */
  dueDate: string;
  status: TaskStatus;
  createdAt: string;
}

export interface TaskInput {
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
}

export const STATUS_LABEL: Record<TaskStatus, string> = {
  pendente: "Pendente",
  concluida: "Concluída",
};
