import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Task } from "../types";

interface DeleteConfirmationProps {
  open: boolean;
  task: Task | null;
  onCancel: () => void;
  onConfirm: (task: Task) => void;
}

export function DeleteConfirmation({ open, task, onCancel, onConfirm }: DeleteConfirmationProps) {
  return (
    <AlertDialog open={open && task !== null} onOpenChange={(open) => !open && onCancel()}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader className="text-left">
          <AlertDialogTitle className="font-display text-xl">Excluir tarefa?</AlertDialogTitle>
          <AlertDialogDescription>
            A tarefa <strong className="break-words text-foreground">“{task?.title}”</strong> será
            removida da lista. Esta ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2 sm:gap-0">
          <AlertDialogCancel
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-0 h-11 px-5")}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => task && onConfirm(task)}
            className={cn(buttonVariants({ variant: "destructive", size: "lg" }), "h-11 px-5")}
          >
            Sim, excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
