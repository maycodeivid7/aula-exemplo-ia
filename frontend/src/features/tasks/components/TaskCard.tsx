import { CalendarDays, Check, Eye, Pencil, RotateCcw, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatDueDate } from "../format";
import type { Task } from "../types";
import { StatusBadge } from "./StatusBadge";

interface TaskCardProps {
  task: Task;
  onView: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onToggle: (task: Task) => void;
}

export function TaskCard({ task, onView, onEdit, onDelete, onToggle }: TaskCardProps) {
  const done = task.status === "concluida";
  const titleId = `tarefa-${task.id}-titulo`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "animate-card-in group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border p-5 transition-shadow",
        done
          ? "border-border bg-muted"
          : "border-border bg-card shadow-card hover:shadow-card-hover",
      )}
    >
      <span
        aria-hidden="true"
        className={cn("absolute inset-y-0 left-0 w-1", done ? "bg-done" : "bg-pending")}
      />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StatusBadge status={task.status} />
        {task.dueDate && (
          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            <span className="sr-only">Vencimento:</span>
            <time dateTime={task.dueDate}>{formatDueDate(task.dueDate)}</time>
          </p>
        )}
      </div>

      <div className="min-w-0 flex-1 space-y-1.5">
        <h3
          id={titleId}
          className={cn(
            "break-words text-lg font-semibold leading-snug",
            done ? "text-muted-foreground line-through decoration-1" : "text-foreground",
          )}
        >
          {task.title}
        </h3>
        <p className="line-clamp-2 break-words text-sm text-muted-foreground">
          {task.description || <span className="italic">Sem descrição.</span>}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
        <Button
          variant={done ? "outline" : "done"}
          size="sm"
          onClick={() => onToggle(task)}
          aria-label={done ? `Reabrir tarefa: ${task.title}` : `Concluir tarefa: ${task.title}`}
          className="h-9 px-3"
        >
          {done ? <RotateCcw aria-hidden="true" /> : <Check aria-hidden="true" />}
          {done ? "Reabrir" : "Concluir"}
        </Button>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView(task)}
            aria-label={`Ver detalhes da tarefa: ${task.title}`}
            title="Ver detalhes"
          >
            <Eye aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(task)}
            aria-label={`Editar tarefa: ${task.title}`}
            title="Editar"
          >
            <Pencil aria-hidden="true" />
          </Button>
          <Button
            variant="ghost-destructive"
            size="icon"
            onClick={() => onDelete(task)}
            aria-label={`Excluir tarefa: ${task.title}`}
            title="Excluir"
          >
            <Trash2 aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
}
