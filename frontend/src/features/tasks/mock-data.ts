import type { Task } from "./types";

/**
 * DADOS DE DEMONSTRAÇÃO — tarefas fictícias mantidas apenas em memória.
 * Ao recarregar a página, a lista volta a este estado inicial.
 */
export const DEMO_TASKS: Task[] = [
  {
    id: "demo-1",
    title: "Estudar arrays em JavaScript",
    description:
      "Revisar os métodos map, filter e reduce e resolver os cinco exercícios da apostila do curso.",
    dueDate: "2026-11-24",
    status: "pendente",
    createdAt: "2026-11-15T09:00:00",
  },
  {
    id: "demo-2",
    title: "Montar portfólio no GitHub",
    description:
      "Criar o README do perfil e publicar os dois projetos finalizados com prints e instruções de uso.",
    dueDate: "2026-11-30",
    status: "pendente",
    createdAt: "2026-11-14T14:30:00",
  },
  {
    id: "demo-3",
    title: "Enviar currículo para o programa de estágio",
    description: "",
    dueDate: "2026-12-05",
    status: "pendente",
    createdAt: "2026-11-16T18:10:00",
  },
  {
    id: "demo-4",
    title: "Configurar o ambiente de desenvolvimento",
    description:
      "Instalar VS Code, Node.js e Git, e configurar as extensões recomendadas pela turma.",
    dueDate: "2026-11-10",
    status: "concluida",
    createdAt: "2026-11-08T10:00:00",
  },
  {
    id: "demo-5",
    title: "Assistir à aula sobre HTML semântico",
    description: "Anotar as principais tags e quando usar header, main, section e article.",
    dueDate: "",
    status: "concluida",
    createdAt: "2026-11-09T20:00:00",
  },
  {
    id: "demo-6",
    title: "Organizar a mesa de estudos",
    description: "Separar cadernos, carregadores e deixar o espaço livre para as aulas da semana.",
    dueDate: "",
    status: "pendente",
    createdAt: "2026-11-17T08:00:00",
  },
];
