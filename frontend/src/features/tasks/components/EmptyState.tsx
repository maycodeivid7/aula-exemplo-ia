import { ClipboardList, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptyState({ onNewTask }: { onNewTask: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-input bg-card px-6 py-14 text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary">
        <ClipboardList aria-hidden="true" className="size-7" />
      </span>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">Não existem tarefas cadastradas</h2>
        <p className="text-sm text-muted-foreground">
          Comece adicionando sua primeira tarefa para organizar o seu dia.
        </p>
      </div>
      <Button size="lg" onClick={onNewTask} className="h-11 px-5">
        <Plus aria-hidden="true" />
        Adicionar primeira tarefa
      </Button>
    </div>
  );
}
