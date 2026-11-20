import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatCreatedAt, formatDueDate } from "../format";
import type { Task } from "../types";
import { StatusBadge } from "./StatusBadge";

interface TaskDetailsProps {
  open: boolean;
  task: Task | null;
  onOpenChange: (open: boolean) => void;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export function TaskDetails({ open, task, onOpenChange, onEdit, onDelete }: TaskDetailsProps) {
  return (
    <Dialog open={open && task !== null} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 sm:max-w-lg">
        {task && (
          <>
            <DialogHeader className="space-y-3 pr-6 text-left">
              <StatusBadge status={task.status} className="w-fit" />
              <DialogTitle className="break-words font-display text-2xl leading-tight">
                {task.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Detalhes completos da tarefa
              </DialogDescription>
            </DialogHeader>

            <dl className="grid gap-4 rounded-xl bg-muted p-4 text-sm">
              <div className="grid gap-1">
                <dt className="font-semibold text-muted-foreground">Descrição</dt>
                <dd className="whitespace-pre-wrap break-words text-foreground">
                  {task.description || "Sem descrição."}
                </dd>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1">
                  <dt className="font-semibold text-muted-foreground">Data de vencimento</dt>
                  <dd className="text-foreground first-letter:uppercase">
                    {task.dueDate ? (
                      <time dateTime={task.dueDate}>{formatDueDate(task.dueDate, "long")}</time>
                    ) : (
                      "Não informada"
                    )}
                  </dd>
                </div>
                <div className="grid gap-1">
                  <dt className="font-semibold text-muted-foreground">Situação</dt>
                  <dd className="text-foreground">
                    {task.status === "concluida" ? "Concluída" : "Pendente"}
                  </dd>
                </div>
              </div>
              <div className="grid gap-1">
                <dt className="font-semibold text-muted-foreground">Criada em</dt>
                <dd className="text-foreground">{formatCreatedAt(task.createdAt)}</dd>
              </div>
            </dl>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                variant="ghost-destructive"
                size="lg"
                onClick={() => onDelete(task)}
                className="h-11 px-5"
              >
                <Trash2 aria-hidden="true" />
                Excluir
              </Button>
              <Button size="lg" onClick={() => onEdit(task)} className="h-11 px-5">
                <Pencil aria-hidden="true" />
                Editar
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
