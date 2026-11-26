# Apresentação geral do sistema

## Identificação

| Item | Informação |
|---|---|
| Nome apresentado na aplicação | **Minhas Tarefas** |
| Contexto do projeto | Projeto Jovem Programador em Ação |
| Tipo de sistema | Aplicação web para organização de tarefas pessoais |
| Situação da documentação | Baseada na implementação encontrada no repositório |

## Sumário

1. [Visão geral](#visão-geral)
2. [Objetivo e problema atendido](#objetivo-e-problema-atendido)
3. [Público-alvo](#público-alvo)
4. [Funcionalidades implementadas](#funcionalidades-implementadas)
5. [Benefícios](#benefícios)
6. [Tecnologias](#tecnologias)
7. [Funcionamento geral](#funcionamento-geral)
8. [Escopo e pendências](#escopo-e-pendências)
9. [Documentos da entrega](#documentos-da-entrega)

## Visão geral

**Minhas Tarefas** é uma aplicação web para cadastrar e acompanhar tarefas pessoais. A interface permite organizar os itens em pendentes e concluídos, consultar detalhes, editar informações e excluir registros.

O projeto contém um frontend React e uma API separada em Node.js/Express. A API grava as tarefas em um banco PostgreSQL por meio do Sequelize. A página principal consulta a API; os dados de demonstração presentes no código frontend são usados pelos testes e não são carregados como lista inicial da aplicação.

## Objetivo e problema atendido

O sistema oferece uma lista centralizada para registrar atividades, acompanhar sua situação e consultar a data de vencimento quando informada. Com isso, atende ao problema de organizar tarefas pessoais e distinguir o que ainda está pendente do que foi concluído.

## Público-alvo

A aplicação é adequada a pessoas que desejam acompanhar suas próprias tarefas, incluindo estudantes. O código não define cadastro de usuários, perfis, papéis ou permissões. Portanto, não há níveis de acesso distintos documentados.

## Funcionalidades implementadas

- Criar uma tarefa com título, descrição opcional e data de vencimento opcional.
- Consultar a lista e os detalhes de uma tarefa.
- Editar título, descrição, data e situação.
- Concluir uma tarefa pendente ou reabrir uma concluída.
- Excluir uma tarefa após confirmação.
- Exibir contadores de tarefas totais, pendentes e concluídas.
- Mostrar estados de carregamento, erro, lista vazia e mensagens de sucesso.
- Persistir registros no PostgreSQL quando o frontend está conectado à API e esta ao banco configurado.

## Benefícios

- Reúne tarefas e suas situações em uma única tela.
- Apresenta rapidamente a quantidade de tarefas por situação.
- Permite registrar prazos sem tornar a data obrigatória.
- Mantém os dados no banco configurado pelo backend, em vez de depender apenas do estado em memória do navegador.

Os benefícios acima descrevem as capacidades implementadas; não constituem garantia de disponibilidade, backup ou operação em produção.

## Tecnologias

| Camada | Tecnologias identificadas |
|---|---|
| Interface | React 19, TypeScript, TanStack Start/Router, Vite e Tailwind CSS |
| Componentes e interação | Radix UI, Lucide React, Sonner e React Hook Form disponível nas dependências |
| API | Node.js, Express 5, JavaScript ES modules, CORS e dotenv |
| Persistência | PostgreSQL, Sequelize 6 e driver `pg` |
| Testes frontend | Vitest, Testing Library e jsdom |

As versões apresentadas vêm dos manifests (`package.json`) e podem ser faixas semânticas, não necessariamente a versão efetivamente instalada. Node.js, npm e PostgreSQL não têm versão mínima declarada nos arquivos analisados.

## Funcionamento geral

1. A pessoa acessa a página principal do frontend.
2. O frontend solicita a lista de tarefas à API por HTTP.
3. A API encaminha as operações pelas camadas de rota, controller e service.
4. A camada de dados usa Sequelize para consultar ou alterar a tabela `tarefas` no PostgreSQL.
5. A resposta é apresentada na interface, que atualiza os cartões e os indicadores.

O repositório também contém `server.js` e `index.html`, um exemplo independente com uma lista fixa em memória. Esse exemplo não é usado pelos scripts principais de execução e não deve ser confundido com a aplicação integrada ao banco.

## Escopo e pendências

- A aplicação não implementa login, cadastro de usuários ou isolamento de tarefas por usuário.
- Não há busca, filtros de interface, notificações externas, exportação nem sincronização específica entre dispositivos.
- A etiqueta visual “Dados de demonstração” não representa a origem efetiva dos dados da página: a tela usa a API e o banco. A equipe deve confirmar se a etiqueta deve permanecer.
- Não foram encontrados instruções de implantação em produção, política de backup ou níveis de serviço.
- A compatibilidade oficial de sistemas operacionais, navegadores e requisitos de hardware ainda precisa ser confirmada.

Mais detalhes estão em [Instalação e configuração](./03-instalacao-configuracao.md), [Documentação técnica](./04-documentacao-tecnica.md), [Banco de dados](./05-banco-de-dados.md) e [Manutenção e suporte](./06-manutencao-suporte.md).

## Documentos da entrega

- [Manual do usuário](./02-manual-usuario.md)
- [Manual de instalação e configuração](./03-instalacao-configuracao.md)
- [Documentação técnica e arquitetura](./04-documentacao-tecnica.md)
- [Banco de dados](./05-banco-de-dados.md)
- [Manutenção e suporte](./06-manutencao-suporte.md)
- [Histórico de versões](./07-historico-versoes.md)
