import { CheckCircle2, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { STATUS_LABEL, type TaskStatus } from "../types";

export function StatusBadge({ status, className }: { status: TaskStatus; className?: string }) {
  const done = status === "concluida";
  const Icon = done ? CheckCircle2 : Clock;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        done ? "bg-done-soft text-done" : "bg-pending-soft text-pending",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-3.5" />
      {STATUS_LABEL[status]}
    </span>
  );
}
