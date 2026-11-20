import type { Task } from "../types";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onView: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onToggle: (task: Task) => void;
}

export function TaskList({ tasks, ...handlers }: TaskListProps) {
  const pending = tasks.filter((t) => t.status === "pendente");
  const done = tasks.filter((t) => t.status === "concluida");

  return (
    <div className="space-y-10">
      <TaskSection
        id="pendentes"
        title="Pendentes"
        tasks={pending}
        emptyText="Nenhuma tarefa pendente no momento."
        {...handlers}
      />
      <TaskSection
        id="concluidas"
        title="Concluídas"
        tasks={done}
        emptyText="Nenhuma tarefa concluída ainda."
        {...handlers}
      />
    </div>
  );
}

interface TaskSectionProps extends Omit<TaskListProps, "tasks"> {
  id: string;
  title: string;
  tasks: Task[];
  emptyText: string;
}

function TaskSection({ id, title, tasks, emptyText, ...handlers }: TaskSectionProps) {
  const headingId = `secao-${id}`;
  return (
    <section aria-labelledby={headingId} className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 id={headingId} className="text-xl font-semibold text-foreground">
          {title}
        </h2>
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-sm font-semibold tabular-nums text-secondary-foreground">
          <span className="sr-only">Quantidade: </span>
          {tasks.length}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
      {tasks.length === 0 ? (
        <p className="rounded-xl border border-dashed border-input px-4 py-6 text-center text-sm text-muted-foreground">
          {emptyText}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tasks.map((task) => (
            <li key={task.id} className="min-w-0">
              <TaskCard task={task} {...handlers} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
