# Manual do usuário

## Sumário

1. [Sobre este manual](#sobre-este-manual)
2. [Requisitos e acesso](#requisitos-e-acesso)
3. [Tela principal](#tela-principal)
4. [Criar uma tarefa](#criar-uma-tarefa)
5. [Consultar detalhes](#consultar-detalhes)
6. [Editar uma tarefa](#editar-uma-tarefa)
7. [Concluir ou reabrir](#concluir-ou-reabrir)
8. [Excluir uma tarefa](#excluir-uma-tarefa)
9. [Validações e mensagens](#validações-e-mensagens)
10. [Exemplo de uso](#exemplo-de-uso)
11. [Dúvidas e problemas comuns](#dúvidas-e-problemas-comuns)
12. [Capturas de tela e pendências](#capturas-de-tela-e-pendências)

## Sobre este manual

Este manual explica as operações que estão disponíveis na aplicação **Minhas Tarefas**. A tela principal é a única página funcional identificada no código. As tarefas são obtidas do backend e armazenadas no banco PostgreSQL configurado pela equipe responsável.

Não é necessário criar uma conta para usar a interface. O sistema não implementa login nem separação de tarefas por usuário. Em uma instalação compartilhada, a API não identifica a pessoa que criou cada registro.

## Requisitos e acesso

Para usar a aplicação, é necessário receber o endereço do ambiente disponibilizado pela equipe e ter acesso a um navegador compatível com a aplicação web. A lista de navegadores oficialmente suportados ainda não foi definida.

Em desenvolvimento, a equipe inicia o backend e o frontend seguindo o [manual de instalação](./03-instalacao-configuracao.md). O endereço local exato é exibido pelo processo do frontend ao iniciar. Não há URL pública de produção documentada no repositório.

## Tela principal

| Área ou elemento | O que apresenta ou faz |
|---|---|
| “Minhas Tarefas” | Nome e introdução da aplicação. |
| “Nova tarefa” | Abre o formulário de cadastro. |
| Indicadores | Quantidade total, pendente e concluída. |
| Seção “Pendentes” | Cartões das tarefas ainda não concluídas. |
| Seção “Concluídas” | Cartões das tarefas concluídas. |
| Cartão da tarefa | Situação, título, trecho da descrição e vencimento, se informado. |
| Ações do cartão | Concluir/reabrir, ver detalhes, editar e excluir. |
| Carregamento/erro | Informa o carregamento ou oferece “Tentar novamente” se a lista não puder ser carregada. |

As tarefas são apresentadas em duas seções, com as mais recentemente criadas primeiro dentro da lista recebida pela API. Não há controle de pesquisa ou filtro visível.

### Uso em telas menores e acessibilidade

A interface adapta os indicadores e cartões à largura disponível; em telas menores, os cartões são organizados em uma coluna. Há rótulos associados aos campos, mensagens de validação acessíveis, nomes acessíveis nas ações com ícones, foco no título após erro de preenchimento e um atalho de teclado para pular ao conteúdo principal.

### Captura de tela

**[Captura pendente: tela principal da aplicação em execução.]** Não foi incluída uma imagem porque a tela depende da conexão com a API e com um banco configurado; não havia um ambiente funcional de demonstração confirmado durante a preparação desta documentação.

## Criar uma tarefa

1. Na página principal, selecione **Nova tarefa**. Quando a lista estiver vazia, também é possível selecionar **Adicionar primeira tarefa**.
2. Preencha o campo **Título**. Ele é obrigatório.
3. Se desejar, preencha **Descrição** e **Data de vencimento**.
4. A situação inicial é **Pendente** e não pode ser alterada durante o cadastro.
5. Selecione **Salvar**.
6. Após a gravação, a tarefa aparece na seção “Pendentes” e os indicadores são atualizados.

Selecione **Cancelar** para fechar o formulário sem enviar os dados.

## Consultar detalhes

1. No cartão desejado, selecione o botão de detalhes (ícone de visualização).
2. Confira o título, a descrição completa, a data de vencimento, a situação e a data de criação.
3. No painel de detalhes, selecione **Editar** para alterar a tarefa ou **Excluir** para iniciar a exclusão.

Se não houver descrição ou vencimento, a tela apresenta “Sem descrição.” ou “Não informada”.

## Editar uma tarefa

1. No cartão, selecione **Editar**. Também é possível abrir os detalhes e selecionar **Editar**.
2. Os campos são preenchidos com os dados atuais.
3. Altere os campos necessários. A situação pode ser selecionada entre **Pendente** e **Concluída**.
4. Selecione **Salvar** para enviar a atualização ou **Cancelar** para sair sem salvar.

Ao salvar com sucesso, a aplicação informa **“Tarefa atualizada”** e atualiza o cartão e os indicadores.

## Concluir ou reabrir

- Em uma tarefa pendente, selecione **Concluir**. A tarefa passa para “Concluídas”.
- Em uma tarefa concluída, selecione **Reabrir**. A tarefa volta para “Pendentes”.

A interface informa **“Tarefa concluída”** ou **“Tarefa reaberta”** quando a API confirma a alteração.

## Excluir uma tarefa

1. No cartão ou na tela de detalhes, selecione **Excluir**.
2. Leia a confirmação, que identifica a tarefa e informa que a ação não pode ser desfeita.
3. Selecione **Sim, excluir** para confirmar ou **Cancelar** para manter a tarefa.

Após a confirmação bem-sucedida, o cartão é removido e a aplicação informa **“Tarefa excluída”**. Não foi identificada uma função de restauração.

## Validações e mensagens

| Situação | Comportamento observado |
|---|---|
| Título vazio ou composto apenas por espaços | O formulário apresenta “Informe o título da tarefa.” e mantém o foco no título. |
| Título acima de 120 caracteres | O campo limita a entrada a 120 caracteres; o backend também valida esse limite. |
| Descrição acima de 1.000 caracteres | O campo limita a entrada a 1.000 caracteres; o backend também valida esse limite. |
| Data preenchida | O formulário usa um campo de data. A API espera o formato `AAAA-MM-DD`; o valor é opcional. |
| Cadastro concluído | Notificação “Tarefa cadastrada”. |
| Edição concluída | Notificação “Tarefa atualizada”. |
| Falha ao salvar, alterar situação ou excluir | A interface mostra uma notificação de erro e, quando há uma mensagem JSON da API, apresenta essa mensagem. |
| Falha ao carregar a lista | A página mostra o erro recebido e oferece “Tentar novamente”. |

As mensagens exatas podem variar conforme a resposta do servidor. Não há garantia de que uma mensagem de falha implique que nenhuma alteração tenha sido registrada; em caso de dúvida, atualize a lista antes de repetir a operação.

## Exemplo de uso

Para organizar uma atividade de estudo:

1. Selecione **Nova tarefa**.
2. Informe o título `Revisar exercícios de JavaScript`.
3. Opcionalmente, inclua uma descrição e uma data.
4. Salve a tarefa.
5. Quando concluir a atividade, selecione **Concluir** no cartão.
6. Se precisar retomar a tarefa, selecione **Reabrir**.

O exemplo ilustra os campos e ações reais; não representa dados previamente existentes no ambiente.

## Dúvidas e problemas comuns

### A lista continua carregando ou mostra uma falha

Confirme com o suporte se o backend e o banco estão ativos e se o frontend está configurado com a URL correta da API. Se o erro aparecer na página, selecione **Tentar novamente**. Consulte também [Instalação e configuração](./03-instalacao-configuracao.md).

### Salvei a tarefa, mas ela não aparece

Atualize a página para consultar novamente o banco. Se a falha persistir, anote a hora aproximada, a operação realizada e a mensagem exibida e solicite suporte. Evite repetir várias vezes a mesma operação sem confirmar se foi gravada.

### Não consigo deixar a tarefa sem título

O título é obrigatório. Informe um título com até 120 caracteres; espaços sozinhos não são aceitos.

### Posso filtrar ou pesquisar tarefas?

Não há filtro nem pesquisa implementados na tela identificada. As tarefas são divididas apenas entre pendentes e concluídas.

### As alterações continuam depois que fecho a página?

As operações da interface são enviadas ao backend, que grava no PostgreSQL. A permanência e a disponibilidade dos dados dependem da configuração e operação desse banco. Os dados fictícios em `mock-data.ts` não são a lista inicial usada pela aplicação.

## Capturas de tela e pendências

Capturas reais devem ser obtidas após a equipe disponibilizar uma instância com API e banco funcionais. Inserir, quando disponível:

- Tela inicial com tarefas pendentes e concluídas.
- Formulário de nova tarefa.
- Formulário de edição.
- Painel de detalhes.
- Confirmação de exclusão.
- Estado vazio e mensagem de erro de carregamento.

A URL entregue ao usuário final e os navegadores oficialmente suportados precisam ser confirmados pela equipe.
