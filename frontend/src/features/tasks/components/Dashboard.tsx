import { CheckCircle2, CircleDashed, ListTodo } from "lucide-react";
import type { ComponentType } from "react";

import { cn } from "@/lib/utils";
import type { TaskStats } from "../task-logic";

interface DashboardProps {
  stats: TaskStats;
}

interface Indicator {
  label: string;
  value: number;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  tone: string;
}

export function Dashboard({ stats }: DashboardProps) {
  const indicators: Indicator[] = [
    {
      label: "Total de tarefas",
      value: stats.total,
      icon: ListTodo,
      tone: "bg-primary-soft text-primary",
    },
    {
      label: "Pendentes",
      value: stats.pending,
      icon: CircleDashed,
      tone: "bg-pending-soft text-pending",
    },
    { label: "Concluídas", value: stats.done, icon: CheckCircle2, tone: "bg-done-soft text-done" },
  ];

  return (
    <section aria-labelledby="indicadores-titulo">
      <h2 id="indicadores-titulo" className="sr-only">
        Indicadores de tarefas
      </h2>
      <dl className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:gap-4">
        {indicators.map(({ label, value, icon: Icon, tone }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card min-[480px]:flex-col min-[480px]:items-start sm:p-5"
          >
            <span className={cn("grid size-10 shrink-0 place-items-center rounded-lg", tone)}>
              <Icon aria-hidden className="size-5" />
            </span>
            <div className="flex flex-1 items-baseline justify-between gap-2 min-[480px]:flex-col min-[480px]:items-start min-[480px]:gap-0.5">
              <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
              <dd
                className="font-display text-3xl font-bold tabular-nums text-foreground"
                aria-live="polite"
              >
                {value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
