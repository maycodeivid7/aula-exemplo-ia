import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { emptyTaskInput, taskToInput, validateTask, type ValidationErrors } from "../task-logic";
import { STATUS_LABEL, type Task, type TaskInput, type TaskStatus } from "../types";
import { FeedbackMessage } from "./FeedbackMessage";

interface TaskFormProps {
  open: boolean;
  /** Tarefa em edição; null no cadastro. */
  task: Task | null;
  /** Muda a cada abertura para reiniciar os campos. */
  session: number;
  onOpenChange: (open: boolean) => void;
  onSubmit: (input: TaskInput) => void;
}

export function TaskForm({ open, task, session, onOpenChange, onSubmit }: TaskFormProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 sm:max-w-lg">
        <TaskFormBody
          key={session}
          task={task}
          onCancel={() => onOpenChange(false)}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}

function TaskFormBody({
  task,
  onCancel,
  onSubmit,
}: {
  task: Task | null;
  onCancel: () => void;
  onSubmit: (input: TaskInput) => void;
}) {
  const isEdit = task !== null;
  const [values, setValues] = useState<TaskInput>(() =>
    task ? taskToInput(task) : emptyTaskInput(),
  );
  const [errors, setErrors] = useState<ValidationErrors>({});
  const titleRef = useRef<HTMLInputElement>(null);
  const uid = useId();
  const ids = {
    title: `${uid}-titulo`,
    titleError: `${uid}-titulo-erro`,
    description: `${uid}-descricao`,
    dueDate: `${uid}-vencimento`,
    status: `${uid}-situacao`,
    statusHint: `${uid}-situacao-dica`,
  };

  useEffect(() => {
    if (errors.title) titleRef.current?.focus();
  }, [errors]);

  function update<K extends keyof TaskInput>(key: K, value: TaskInput[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (key === "title" && errors.title && String(value).trim() !== "") setErrors({});
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validateTask(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      titleRef.current?.focus();
      return;
    }
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <DialogHeader className="text-left">
        <DialogTitle className="font-display text-2xl">
          {isEdit ? "Editar tarefa" : "Nova tarefa"}
        </DialogTitle>
        <DialogDescription>
          {isEdit
            ? "Altere os dados da tarefa e salve para atualizar a lista."
            : "Preencha os dados abaixo. Campos marcados com * são obrigatórios."}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-5">
        <div className="grid content-start gap-2">
          <label htmlFor={ids.title} className="text-sm font-semibold text-foreground">
            Título{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
            <span className="sr-only">(obrigatório)</span>
          </label>
          <input
            ref={titleRef}
            id={ids.title}
            type="text"
            autoFocus
            required
            aria-required="true"
            aria-invalid={errors.title ? "true" : "false"}
            aria-describedby={errors.title ? ids.titleError : undefined}
            value={values.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Ex.: Estudar funções em JavaScript"
            maxLength={120}
            className="field"
          />
          {errors.title && (
            <FeedbackMessage id={ids.titleError} variant="error">
              {errors.title}
            </FeedbackMessage>
          )}
        </div>

        <div className="grid content-start gap-2">
          <label htmlFor={ids.description} className="text-sm font-semibold text-foreground">
            Descrição <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <textarea
            id={ids.description}
            rows={4}
            value={values.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Detalhes, passos ou observações sobre a tarefa"
            maxLength={1000}
            className="field min-h-24 resize-y"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid content-start gap-2">
            <label htmlFor={ids.dueDate} className="text-sm font-semibold text-foreground">
              Data de vencimento{" "}
              <span className="font-normal text-muted-foreground">(opcional)</span>
            </label>
            <input
              id={ids.dueDate}
              type="date"
              value={values.dueDate}
              onChange={(e) => update("dueDate", e.target.value)}
              className="field"
            />
          </div>

          <div className="grid content-start gap-2">
            <label htmlFor={ids.status} className="text-sm font-semibold text-foreground">
              Situação{" "}
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
              <span className="sr-only">(obrigatório)</span>
            </label>
            <select
              id={ids.status}
              required
              aria-required="true"
              disabled={!isEdit}
              aria-describedby={!isEdit ? ids.statusHint : undefined}
              value={values.status}
              onChange={(e) => update("status", e.target.value as TaskStatus)}
              className="field cursor-pointer disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
            >
              {(Object.keys(STATUS_LABEL) as TaskStatus[]).map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
            {!isEdit && (
              <p id={ids.statusHint} className="text-xs text-muted-foreground">
                Novas tarefas começam como pendentes.
              </p>
            )}
          </div>
        </div>
      </div>

      <DialogFooter className="gap-2 sm:gap-0">
        <Button type="button" variant="outline" size="lg" onClick={onCancel} className="h-11 px-5">
          Cancelar
        </Button>
        <Button type="submit" size="lg" className="h-11 px-6">
          Salvar
        </Button>
      </DialogFooter>
    </form>
  );
}
