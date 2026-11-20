import { useCallback, useEffect, useMemo, useState } from "react";

import { getStats } from "./task-logic";
import type { Task, TaskInput } from "./types";

const API_URL = (
  (import.meta.env.VITE_API_URL as string | undefined) || "http://localhost:3001/api"
).replace(/\/$/, "");

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    let message = "Não foi possível completar a operação.";
    try {
      const body = (await response.json()) as { message?: string };
      if (body.message) message = body.message;
    } catch {
      // Mantém a mensagem padrão quando a resposta não contém JSON.
    }
    throw new Error(message);
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiRequest<Task[]>("/tarefas");
      setTasks(data);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Erro ao carregar tarefas.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void reload();
  }, [reload]);

  const createTask = useCallback(async (input: TaskInput) => {
    const tarefa = await apiRequest<Task>("/tarefas", {
      method: "POST",
      body: JSON.stringify(input),
    });
    setTasks((atuais) => [tarefa, ...atuais]);
  }, []);

  const updateTask = useCallback(async (id: string, input: TaskInput) => {
    const tarefa = await apiRequest<Task>(`/tarefas/${encodeURIComponent(id)}`, {
      method: "PUT",
      body: JSON.stringify(input),
    });
    setTasks((atuais) => atuais.map((item) => (item.id === id ? tarefa : item)));
  }, []);

  const toggleTask = useCallback(async (id: string) => {
    const tarefa = await apiRequest<Task>(`/tarefas/${encodeURIComponent(id)}/situacao`, {
      method: "PATCH",
    });
    setTasks((atuais) => atuais.map((item) => (item.id === id ? tarefa : item)));
  }, []);

  const deleteTask = useCallback(async (id: string) => {
    await apiRequest<void>(`/tarefas/${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    setTasks((atuais) => atuais.filter((item) => item.id !== id));
  }, []);

  const stats = useMemo(() => getStats(tasks), [tasks]);

  return { tasks, stats, loading, error, reload, createTask, updateTask, toggleTask, deleteTask };
}
