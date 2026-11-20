# Instruções para desenvolvimento do projeto – Jovem Programador

## 1. Contexto do projeto

Estamos desenvolvendo um projeto acadêmico do curso **SENAC – Jovem Programador**.

O projeto possui dois diretórios principais:

**Frontend (projeto principal):**
```text
C:\Users\mayco62319126\Documents\UC6 - Renan\jovem-programador-em-a-o
```

**Backend BASE (projeto de referência):**
```text
C:\Users\mayco62319126\Documents\UC4 - Renan\avaliacao-backend
```

O objetivo é desenvolver o backend do projeto principal, utilizando como referência a arquitetura, organização, padrões de código e tecnologias já implementados no projeto Backend BASE.

## 2. Análise obrigatória do Backend BASE

Antes de iniciar qualquer implementação:

1. Analise detalhadamente a estrutura de diretórios e arquivos do Backend BASE.
2. Identifique a arquitetura utilizada e como suas responsabilidades estão distribuídas.
3. Identifique as tecnologias, bibliotecas e dependências utilizadas.
4. Analise como são implementados:
   - Configuração do servidor.
   - Rotas e endpoints.
   - Controllers.
   - Services, caso existam.
   - Models e entidades.
   - Configuração e conexão com o banco de dados.
   - Migrations e Seeders.
   - Middlewares.
   - Tratamento de erros.
   - Validação de dados.
   - Variáveis de ambiente.
5. Identifique os padrões de nomenclatura e organização adotados.
6. Observe como o frontend e o backend devem se comunicar.

**Regra principal:** utilize a arquitetura existente no Backend BASE como referência prioritária. Não crie uma arquitetura completamente diferente sem uma justificativa técnica.

## 3. Tecnologias

Utilize as tecnologias já presentes no Backend BASE sempre que forem adequadas.

Caso seja necessário complementar ou adaptar a estrutura, considere tecnologias como:

- **Node.js:** ambiente de execução JavaScript.
- **Express:** framework para construção da API REST.
- **Sequelize:** ORM para comunicação com banco de dados.
- **MariaDB ou MySQL:** banco de dados relacional, conforme a arquitetura de referência.
- **dotenv:** gerenciamento de variáveis de ambiente.
- **CORS:** configuração de comunicação entre frontend e backend.

Essas tecnologias são sugestões, não requisitos obrigatórios. A escolha definitiva deve considerar o que já existe no Backend BASE.

Evite adicionar dependências desnecessárias.

## 4. Desenvolvimento do backend

Desenvolva o backend dentro do projeto principal, respeitando a separação de responsabilidades e os padrões identificados na análise do Backend BASE.

Requisitos:

- Criar uma API REST.
- Implementar endpoints necessários para o funcionamento do frontend.
- Utilizar Models para representar as entidades do sistema.
- Utilizar Controllers para receber e responder às requisições.
- Utilizar Services quando essa camada fizer parte da arquitetura adotada.
- Implementar rotas organizadas por responsabilidade.
- Configurar corretamente a conexão com o banco de dados.
- Implementar validações de entrada.
- Implementar tratamento centralizado de erros, conforme o padrão identificado.
- Utilizar consultas parametrizadas ou os recursos seguros do ORM.
- Retornar respostas HTTP adequadas.
- Manter o código organizado, legível e reutilizável.

## 5. Integração com o frontend

Analise o frontend existente antes de desenvolver os endpoints.

Identifique:

- Páginas e componentes existentes.
- Formulários e campos utilizados.
- Dados apresentados nas interfaces.
- Ações executadas pelos usuários.
- Necessidades de persistência de dados.
- Requisições HTTP necessárias.

A partir dessa análise, desenvolva os endpoints necessários para atender às funcionalidades existentes.

Não altere desnecessariamente a estrutura visual ou os componentes do frontend.

Configure a comunicação entre frontend e backend utilizando uma URL de API centralizada e variáveis de ambiente quando apropriado.

## 6. Organização e qualidade do código

Siga rigorosamente estas diretrizes:

- Mantenha a arquitetura consistente com o Backend BASE.
- Respeite os padrões de nomenclatura existentes.
- Evite duplicação de código.
- Não concentre toda a lógica de negócio nas rotas ou controllers.
- Utilize async/await quando apropriado.
- Evite valores fixos que deveriam estar em variáveis de ambiente.
- Não exponha credenciais ou informações sensíveis.
- Não sobrescreva arquivos existentes sem necessidade.
- Não remova funcionalidades já implementadas.
- Prefira soluções simples e compatíveis com o nível de complexidade do projeto.

## 7. Estratégia de execução

Execute o desenvolvimento em etapas:

**Etapa 1 – Diagnóstico**
- Analisar o frontend.
- Analisar o Backend BASE.
- Documentar a arquitetura encontrada.
- Identificar as funcionalidades que precisam de backend.

**Etapa 2 – Planejamento**
- Definir as entidades e seus relacionamentos.
- Mapear os endpoints necessários.
- Definir as alterações necessárias na estrutura do projeto.
- Apresentar um plano de implementação.

**Etapa 3 – Implementação**
- Configurar o backend.
- Implementar conexão com o banco de dados.
- Criar Models, Controllers, Services e Routes, conforme a arquitetura de referência.
- Implementar os endpoints.
- Integrar frontend e backend.

**Etapa 4 – Testes**
- Testar a inicialização do servidor.
- Testar a conexão com o banco.
- Testar os endpoints.
- Validar operações de criação, consulta, atualização e exclusão, quando aplicáveis.
- Verificar a integração com o frontend.
- Corrigir erros encontrados.

**Etapa 5 – Documentação**
- Documentar como instalar as dependências.
- Documentar como configurar as variáveis de ambiente.
- Documentar como executar o backend.
- Documentar os endpoints implementados.
- Registrar decisões arquiteturais importantes.

## 8. Restrições importantes

- Não comece a programar antes de analisar os dois projetos.
- Não presuma funcionalidades que não estejam presentes no frontend ou especificadas no projeto.
- Não invente entidades, campos ou relacionamentos sem justificativa.
- Não copie arquivos indiscriminadamente do Backend BASE.
- Utilize-o como referência arquitetural e não como substituto do projeto principal.
- Não modifique o Backend BASE.
- Todas as implementações devem ocorrer no diretório do projeto principal.
- Preserve o funcionamento das funcionalidades existentes.
- Não adicione autenticação, autorização ou integrações externas sem que exista uma necessidade identificada.

## 9. Primeira ação esperada

Comece realizando uma análise completa dos dois diretórios.

**Neste primeiro momento, NÃO implemente código.**

Apresente um diagnóstico contendo:

1. Estrutura atual do frontend.
2. Estrutura e arquitetura do Backend BASE.
3. Tecnologias e dependências identificadas.
4. Funcionalidades do frontend que precisam de suporte do backend.
5. Proposta de arquitetura para o backend do projeto principal.
6. Entidades e relacionamentos inicialmente identificados.
7. Endpoints necessários.
8. Possíveis dificuldades ou incompatibilidades.
9. Plano de implementação dividido em etapas.

Após apresentar o diagnóstico, aguarde minha aprovação antes de iniciar as modificações.

## 10. Diretriz geral

Atue como um desenvolvedor Full Stack experiente, priorizando organização, boas práticas, simplicidade e consistência arquitetural.

O objetivo não é apenas fazer o sistema funcionar, mas desenvolver uma aplicação bem estruturada, compreensível e adequada ao contexto de aprendizagem do curso SENAC Jovem Programador.