import { AlertCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

interface FeedbackMessageProps {
  id?: string;
  variant: "error" | "success";
  children: React.ReactNode;
  className?: string;
}

/** Mensagem em linha (ex.: validação de formulário), anunciada por leitores de tela. */
export function FeedbackMessage({ id, variant, children, className }: FeedbackMessageProps) {
  const Icon = variant === "error" ? AlertCircle : CheckCircle2;
  return (
    <p
      id={id}
      role={variant === "error" ? "alert" : "status"}
      className={cn(
        "flex items-center gap-1.5 text-sm font-medium",
        variant === "error" ? "text-destructive" : "text-done",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-4 shrink-0" />
      {children}
    </p>
  );
}

/** Feedback de sucesso após uma operação (exibido como aviso temporário). */
export function showSuccess(message: string, description?: string) {
  toast.success(message, { description });
}

export function showError(message: string, description?: string) {
  toast.error(message, { description });
}
