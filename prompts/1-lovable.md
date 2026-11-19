# OBJETIVO

Desenvolva o front-end de um sistema web MVP chamado **Minhas Tarefas**, destinado ao gerenciamento de tarefas pessoais.

## Usuário

O sistema será utilizado por uma pessoa que deseja organizar suas atividades diárias, acompanhar tarefas pendentes e registrar tarefas concluídas.

Não existe necessidade de cadastro de usuário ou autenticação.

## Problema

Pessoas frequentemente têm dificuldade para organizar suas atividades, acompanhar o que ainda precisa ser feito e identificar quais tarefas já foram concluídas.

O sistema deverá oferecer uma interface simples e intuitiva para cadastrar, consultar, editar, concluir e excluir tarefas.

## Objetivo do produto

Entregar uma aplicação funcional exclusivamente no front-end, demonstrando todas as operações CRUD utilizando dados simulados.

# PÁGINAS

## 1. Página principal — Lista de tarefas

A página principal deverá apresentar:

- Nome do sistema: Minhas Tarefas.
- Cabeçalho com título e breve descrição.
- Botão "Nova tarefa".
- Indicadores com:
  - Total de tarefas.
  - Tarefas pendentes.
  - Tarefas concluídas.
- Lista de tarefas cadastradas.

Cada tarefa deverá apresentar:

- Título.
- Descrição resumida.
- Data de vencimento, quando informada.
- Situação (Pendente ou Concluída).
- Ação para visualizar detalhes.
- Ação para editar.
- Ação para excluir.
- Controle para concluir ou reabrir a tarefa.

Organize as tarefas de maneira visualmente clara, diferenciando tarefas pendentes das concluídas.

## 2. Cadastro e edição de tarefas

Utilize um modal ou formulário para cadastrar e editar tarefas.

Campos:

| Campo | Tipo | Obrigatório |
|---|---|---|
| Título | Texto | Sim |
| Descrição | Texto multilinha | Não |
| Data de vencimento | Data | Não |
| Situação | Seleção | Sim |

Valores permitidos para situação:
- Pendente.
- Concluída.

No cadastro, a situação inicial deverá ser Pendente.

Na edição, todos os campos deverão ser preenchidos automaticamente com os dados atuais da tarefa.

Disponibilize os botões Salvar e Cancelar.

## 3. Visualização de detalhes

Permita visualizar os dados completos de uma tarefa em um modal ou painel de detalhes.

Disponibilize ações para editar e excluir a tarefa.

# COMPORTAMENTOS

Implemente todos os comportamentos abaixo utilizando exclusivamente JavaScript no front-end.

## CRUD

**Create — Criar**

- Ao clicar em Nova tarefa, abrir o formulário.
- Validar o preenchimento do título.
- Ao salvar, adicionar a tarefa à lista.
- Atualizar os indicadores da página.

**Read — Consultar**

- Exibir todas as tarefas.
- Permitir visualizar os detalhes individuais.
- Apresentar corretamente os dados de cada tarefa.

**Update — Atualizar**

- Permitir editar tarefas existentes.
- Atualizar os dados apresentados na lista.
- Permitir concluir e reabrir tarefas.
- Atualizar os indicadores automaticamente.

**Delete — Excluir**

- Solicitar confirmação antes de excluir.
- Se confirmado, remover a tarefa.
- Se cancelado, manter a tarefa.
- Atualizar os indicadores após a exclusão.

## Dados simulados

Utilize uma lista de tarefas fictícias, claramente identificadas como dados de demonstração.

Crie inicialmente pelo menos cinco tarefas, contendo exemplos de tarefas pendentes e concluídas.

Utilize dados simulados em memória, com estado gerenciado no próprio front-end.

Não utilize localStorage, sessionStorage ou qualquer mecanismo de persistência.

Ao atualizar a página, os dados deverão voltar à lista inicial de demonstração.

## Estados da interface

Implemente os seguintes estados:

1. Estado inicial: exibição das tarefas simuladas.
2. Estado vazio: mensagem informando que não existem tarefas cadastradas, com botão para adicionar a primeira tarefa.
3. Formulário de cadastro: campos vazios.
4. Formulário de edição: campos preenchidos.
5. Validação: mensagem quando o título não estiver preenchido.
6. Confirmação de exclusão: solicitar confirmação do usuário.
7. Feedback de sucesso: apresentar mensagens após cadastrar, editar, concluir ou excluir.
8. Detalhes: exibir informações completas da tarefa selecionada.

# COMPONENTES

Organize a aplicação em componentes reutilizáveis.

Sugestão de estrutura:

- Header: cabeçalho da aplicação.
- Dashboard: indicadores de tarefas.
- TaskList: lista de tarefas.
- TaskCard: representação individual de uma tarefa.
- TaskForm: formulário de cadastro e edição.
- TaskDetails: visualização dos detalhes.
- DeleteConfirmation: confirmação de exclusão.
- EmptyState: apresentação da lista vazia.
- FeedbackMessage: mensagens de sucesso e validação.

Mantenha a lógica de gerenciamento das tarefas separada da apresentação visual sempre que possível.

# RESPONSIVIDADE

A aplicação deverá funcionar adequadamente em:

- Desktop.
- Tablet.
- Smartphones.

Em telas menores:

- Adaptar os indicadores para uma disposição vertical ou em grade.
- Organizar os cartões de tarefas em uma única coluna.
- Garantir que os botões permaneçam acessíveis.
- Adaptar modais e formulários à largura disponível.
- Evitar rolagem horizontal.
- Manter textos legíveis e espaçamentos adequados.

# ACESSIBILIDADE

Implementar boas práticas de acessibilidade:

- Utilizar HTML semântico.
- Associar labels aos campos dos formulários.
- Permitir navegação utilizando teclado.
- Apresentar indicadores visuais de foco.
- Utilizar contraste adequado entre texto e fundo.
- Não depender exclusivamente de cores para indicar a situação das tarefas.
- Utilizar textos acessíveis para botões e ícones.
- Informar mensagens de validação de maneira compreensível.
- Utilizar atributos ARIA quando necessários.

# LIMITES E RESTRIÇÕES DO ESCOPO

**IMPORTANTE: desenvolver SOMENTE O FRONT-END.**

Não implementar:

- Autenticação ou login.
- Cadastro de usuários.
- Backend.
- API REST.
- Banco de dados.
- Supabase.
- Firebase.
- Serviços externos.
- Integrações com terceiros.
- Envio de e-mails ou notificações externas.
- Sincronização entre dispositivos.
- Persistência de dados.

Não adicionar funcionalidades que não estejam especificadas neste documento.

Todas as operações deverão funcionar utilizando dados simulados e estado local em memória.

A aplicação deverá ser navegável e funcional, não apenas uma representação estática ou protótipo visual.

# CRITÉRIOS DE ACEITAÇÃO VISUAL

A interface deverá apresentar:

1. Design moderno, limpo e minimalista.
2. Hierarquia visual clara.
3. Layout organizado e consistente.
4. Indicadores de tarefas com boa legibilidade.
5. Cartões de tarefas com informações bem distribuídas.
6. Diferenciação visual entre tarefas pendentes e concluídas.
7. Formulários intuitivos.
8. Modais com boa organização.
9. Botões com estados de hover e foco.
10. Feedback visual para as operações realizadas.

Utilize uma identidade visual profissional, com cores equilibradas, tipografia legível e espaçamentos consistentes.

Evite excesso de elementos decorativos.

## CRITÉRIOS DE ACEITAÇÃO FUNCIONAL

Considere o MVP concluído quando:

- [ ] A lista inicial de tarefas for apresentada.
- [ ] For possível cadastrar uma tarefa.
- [ ] For possível visualizar uma tarefa.
- [ ] For possível editar uma tarefa.
- [ ] For possível excluir uma tarefa.
- [ ] For possível concluir uma tarefa.
- [ ] For possível reabrir uma tarefa.
- [ ] A validação do título obrigatório funcionar.
- [ ] A confirmação de exclusão funcionar.
- [ ] Os indicadores forem atualizados automaticamente.
- [ ] Os estados vazios e mensagens de feedback funcionarem.
- [ ] A interface funcionar em desktop, tablet e celular.
- [ ] Não existir dependência de backend, banco de dados ou serviços externos.

**ENTREGA ESPERADA:** uma aplicação web MVP de gerenciamento pessoal de tarefas, com CRUD funcional, interface responsiva, acessível e dados fictícios, executada inteiramente no front-end.