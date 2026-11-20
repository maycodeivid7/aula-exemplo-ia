import { createFileRoute } from "@tanstack/react-router";

import { TasksPage } from "@/features/tasks/components/TasksPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minhas Tarefas — organize suas atividades" },
      {
        name: "description",
        content:
          "Cadastre, consulte, edite, conclua e exclua suas tarefas pessoais em uma lista simples.",
      },
      { property: "og:title", content: "Minhas Tarefas — organize suas atividades" },
      {
        property: "og:description",
        content:
          "Cadastre, consulte, edite, conclua e exclua suas tarefas pessoais em uma lista simples.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TasksPage,
});
