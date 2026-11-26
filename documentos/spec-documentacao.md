# Tarefa: Criar documentação profissional para entrega de software ao cliente

## 1. Objetivo

Atue como um Analista de Sistemas Sênior, Arquiteto de Software e Redator de Documentação Técnica.

Sua tarefa é analisar integralmente o projeto aberto no workspace e produzir uma documentação profissional, completa e organizada, destinada à entrega do software ao cliente final.

A documentação deve apresentar o sistema de maneira clara, explicar suas funcionalidades, orientar sua utilização e fornecer informações técnicas necessárias para instalação, configuração, operação e manutenção.

O resultado deve ter padrão profissional, semelhante à documentação entregue por uma empresa de desenvolvimento de software.

## 2. Etapa obrigatória: análise do projeto

Antes de escrever qualquer documentação, analise cuidadosamente todo o repositório.

Estrutura inicial conhecida:

- `frontend/`: aplicação frontend.
- `backend/`: aplicação backend.
- `documentos/`: diretório destinado à documentação.
- `prompts/`: prompts utilizados no desenvolvimento.
- `server.js`: arquivo de execução ou integração, conforme sua implementação.
- `index.html`: arquivo HTML.
- `package.json`: configurações e scripts do projeto.

Investigue:

1. Tecnologias, linguagens, frameworks e bibliotecas utilizados.
2. Arquitetura geral do sistema.
3. Organização dos diretórios e arquivos.
4. Funcionalidades efetivamente implementadas.
5. Fluxos de utilização do sistema.
6. Tipos de usuários e seus respectivos níveis de acesso, caso existam.
7. Comunicação entre frontend e backend.
8. Endpoints e contratos da API.
9. Estrutura do banco de dados, tabelas e relacionamentos.
10. Regras de negócio e validações.
11. Autenticação e autorização, caso implementadas.
12. Integrações com serviços externos, caso existam.
13. Configurações necessárias para execução.
14. Testes existentes e procedimentos de validação.
15. Limitações conhecidas e funcionalidades ainda não implementadas.

**Regra fundamental:** documente somente aquilo que puder ser comprovado pela análise do código-fonte e das configurações existentes.

Não invente funcionalidades, regras de negócio, tecnologias, permissões, endpoints ou comportamentos.

Quando alguma informação não estiver disponível, identifique-a como pendente de confirmação.

## 3. Documentação a ser produzida

Crie os seguintes documentos dentro do diretório `documentos/`.

### 3.1. Apresentação geral do sistema

Arquivo: `01-apresentacao-sistema.md`

Deve conter:

- Nome do software.
- Descrição geral.
- Objetivo do sistema.
- Problema que o software resolve.
- Público-alvo.
- Principais funcionalidades.
- Benefícios proporcionados.
- Tecnologias utilizadas.
- Visão geral de funcionamento.

Utilize linguagem profissional, clara e acessível ao cliente.

### 3.2. Manual do usuário

Arquivo: `02-manual-usuario.md`

Este é um dos documentos mais importantes.

Explique como utilizar o sistema, considerando que o leitor pode não possuir conhecimentos técnicos.

Inclua:

- Introdução ao sistema.
- Requisitos para utilização.
- Como acessar o software.
- Explicação das telas.
- Descrição de cada funcionalidade.
- Procedimentos passo a passo para executar as operações.
- Campos, botões e elementos da interface.
- Regras de preenchimento.
- Mensagens de sucesso e erro.
- Validações realizadas pelo sistema.
- Exemplos práticos de utilização.
- Dúvidas frequentes.
- Orientações para solucionar problemas comuns.

Sempre que possível, utilize capturas de tela reais da aplicação.

Não invente telas ou elementos visuais. Caso não seja possível obter uma captura, indique onde ela deverá ser inserida.

### 3.3. Manual de instalação e configuração

Arquivo: `03-instalacao-configuracao.md`

Documente:

- Requisitos mínimos de hardware e software, quando conhecidos.
- Sistemas operacionais compatíveis, conforme verificado.
- Dependências necessárias.
- Procedimento de instalação.
- Configuração de variáveis de ambiente.
- Configuração do banco de dados.
- Inicialização do backend.
- Inicialização do frontend.
- Configuração de portas e endereços.
- Procedimentos de verificação da instalação.
- Solução de problemas comuns.

Inclua comandos reais encontrados ou validados no projeto.

Diferencie claramente ambiente de desenvolvimento e ambiente de produção.

### 3.4. Documentação técnica e arquitetura

Arquivo: `04-documentacao-tecnica.md`

Produza uma documentação voltada para desenvolvedores e profissionais responsáveis pela manutenção.

Inclua:

- Arquitetura do sistema.
- Tecnologias e versões identificadas.
- Organização do frontend.
- Organização do backend.
- Responsabilidade dos principais módulos.
- Fluxo de comunicação entre componentes.
- Estrutura da API.
- Endpoints disponíveis.
- Métodos HTTP.
- Parâmetros e formatos de requisição.
- Exemplos de respostas.
- Tratamento de erros.
- Regras de negócio.
- Estrutura do banco de dados.
- Relacionamentos entre entidades.
- Estratégias de autenticação e autorização, se existentes.

Utilize diagramas Mermaid quando contribuírem para a compreensão.

### 3.5. Banco de dados

Arquivo: `05-banco-de-dados.md`

Documente:

- Sistema gerenciador de banco de dados.
- Estrutura das tabelas.
- Descrição das colunas.
- Tipos de dados.
- Chaves primárias.
- Chaves estrangeiras.
- Relacionamentos.
- Restrições.
- Índices, quando existentes.
- Como configurar e inicializar o banco.
- Scripts de criação e migração disponíveis.

Inclua um diagrama entidade-relacionamento em Mermaid, se aplicável.

Nunca exponha senhas, credenciais ou informações sensíveis.

### 3.6. Manutenção e suporte

Arquivo: `06-manutencao-suporte.md`

Inclua:

- Procedimentos básicos de manutenção.
- Como iniciar e interromper os serviços.
- Como verificar logs.
- Como identificar problemas comuns.
- Procedimentos de backup e restauração, caso existam.
- Recomendações de segurança.
- Cuidados com atualizações.
- Informações necessárias para solicitar suporte.
- Limitações técnicas conhecidas.

Não apresente procedimentos de backup, recuperação ou manutenção como existentes se não estiverem implementados ou documentados no projeto. Identifique recomendações e procedimentos pendentes separadamente.

### 3.7. Histórico de versões

Arquivo: `07-historico-versoes.md`

Crie uma estrutura para registrar:

- Versão do software.
- Data da versão.
- Principais alterações.
- Funcionalidades adicionadas.
- Correções realizadas.
- Problemas conhecidos.

Utilize informações verificáveis do Git quando disponíveis. Não invente datas ou versões.

## 4. Padrão de escrita e apresentação

Toda a documentação deverá seguir estas diretrizes:

- Idioma: português brasileiro.
- Linguagem profissional e objetiva.
- Organização por títulos e subtítulos.
- Sumário nos documentos extensos.
- Exemplos práticos sempre que necessário.
- Tabelas para apresentar informações estruturadas.
- Blocos de código para comandos e exemplos técnicos.
- Diagramas Mermaid quando apropriado.
- Padronização de nomenclaturas.
- Explicações compreensíveis para o público correspondente.

Evite excesso de termos técnicos nos documentos destinados ao usuário final.

Nos documentos técnicos, utilize terminologia adequada e explicações detalhadas.

## 5. Regras importantes

1. Não altere o código-fonte da aplicação.
2. Não altere configurações existentes.
3. Não instale dependências.
4. Não modifique o comportamento do software.
5. Não invente funcionalidades.
6. Não exponha informações confidenciais.
7. Não registre credenciais reais nos documentos.
8. Não confunda funcionalidades planejadas com funcionalidades implementadas.
9. Não considere que o projeto está pronto para produção sem verificar os requisitos necessários.
10. Não exclua ou sobrescreva documentos existentes sem antes analisá-los.

Caso encontre inconsistências ou informações faltantes, registre-as em uma seção específica de pendências.

## 6. Revisão e validação

Após produzir os documentos:

1. Verifique se todas as funcionalidades identificadas estão documentadas.
2. Confira se os comandos apresentados realmente correspondem aos scripts do projeto.
3. Confira se os endpoints documentados existem.
4. Confira se as tabelas e relacionamentos correspondem ao banco de dados.
5. Verifique se os procedimentos de instalação são coerentes.
6. Procure informações contraditórias entre os documentos.
7. Confira os links internos e referências entre arquivos.
8. Verifique a clareza das instruções destinadas ao usuário final.
9. Identifique informações que dependem de confirmação do cliente ou da equipe de desenvolvimento.

## 7. Resultado esperado

Ao finalizar, apresente:

- Todos os arquivos Markdown criados dentro de `documentos/`.
- Uma organização coerente dos arquivos.
- Documentação completa e consistente com o software real.
- Diagramas necessários.
- Relação de informações pendentes de confirmação.
- Resumo dos documentos produzidos.
- Lista de funcionalidades que não puderam ser documentadas por falta de implementação ou informação.

**Importante:** não se limite a produzir um README genérico. O objetivo é entregar um conjunto de documentos que possa acompanhar o software em sua entrega oficial ao cliente.

Comece pela análise completa do repositório. Somente depois de concluir essa análise, inicie a produção dos documentos.