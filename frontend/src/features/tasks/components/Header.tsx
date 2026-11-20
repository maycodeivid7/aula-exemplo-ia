import { FlaskConical, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onNewTask: () => void;
}

export function Header({ onNewTask }: HeaderProps) {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 space-y-3">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <FlaskConical aria-hidden="true" className="size-3.5" />
          Dados de demonstração
        </p>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Minhas Tarefas</h1>
        <p className="max-w-xl text-base text-muted-foreground">
          Organize suas atividades do dia, acompanhe o que está pendente e registre o que já foi
          concluído.
        </p>
      </div>
      <Button size="lg" onClick={onNewTask} className="h-11 w-full px-5 sm:w-auto">
        <Plus aria-hidden="true" />
        Nova tarefa
      </Button>
    </header>
  );
}
