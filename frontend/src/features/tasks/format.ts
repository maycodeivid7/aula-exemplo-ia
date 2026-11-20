import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

/** Formata AAAA-MM-DD como data local, ex.: "24 de nov. de 2026". */
export function formatDueDate(date: string, style: "short" | "long" = "short"): string {
  if (!date) return "";
  const parsed = parseISO(date);
  return style === "long"
    ? format(parsed, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : format(parsed, "d 'de' MMM 'de' yyyy", { locale: ptBR });
}

export function formatCreatedAt(date: string): string {
  return format(parseISO(date), "d 'de' MMMM 'de' yyyy, HH:mm", { locale: ptBR });
}
