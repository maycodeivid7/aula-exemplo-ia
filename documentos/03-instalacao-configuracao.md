# Manual de instalação e configuração

## Sumário

1. [Escopo e ambiente](#escopo-e-ambiente)
2. [Requisitos](#requisitos)
3. [Estrutura relevante](#estrutura-relevante)
4. [Instalação das dependências](#instalação-das-dependências)
5. [Configuração do banco e do backend](#configuração-do-banco-e-do-backend)
6. [Configuração do frontend](#configuração-do-frontend)
7. [Inicialização](#inicialização)
8. [Verificação](#verificação)
9. [Produção](#produção)
10. [Solução de problemas](#solução-de-problemas)
11. [Pendências de ambiente](#pendências-de-ambiente)

## Escopo e ambiente

Este procedimento descreve como executar o projeto localmente usando os scripts existentes na raiz. Não equivale a um procedimento de implantação em produção.

O repositório inclui um frontend e um backend independentes. O backend requer um banco PostgreSQL acessível e configurado. A inicialização da API falha se a autenticação no banco falhar.

## Requisitos

| Requisito | Informação confirmada |
|---|---|
| Node.js e npm | Necessários para os scripts e dependências JavaScript. Versão mínima não declarada. |
| PostgreSQL | Necessário ao backend. Versão mínima não declarada. |
| Git | Necessário se a instalação for feita a partir do repositório remoto; a URL do repositório não é configurada no projeto. |
| Navegador | Necessário para acessar o frontend. Matriz de compatibilidade não documentada. |
| Sistema operacional | Não há matriz oficial. Os scripts e caminhos foram verificados neste workspace Windows; isso não comprova suporte formal a outros sistemas. |
| Hardware | Requisitos mínimos de CPU, memória ou armazenamento não especificados. |

## Estrutura relevante

```text
frontend/       aplicação web React/TanStack
backend/        API Express e integração com PostgreSQL
documentos/     documentação e especificações do projeto
prompts/        prompts usados durante o desenvolvimento
server.js       exemplo HTTP independente, fora do fluxo principal
index.html      página do exemplo independente
package.json    scripts de coordenação na raiz
```

## Instalação das dependências

Execute a partir da raiz do repositório:

```powershell
npm run install:all
```

O script instala as dependências separadamente em `frontend/` e `backend/`. A instalação requer acesso aos registries de pacotes configurados no ambiente. Não é necessário executar `npm install` na raiz: o `package.json` da raiz não declara dependências da aplicação.

## Configuração do banco e do backend

1. Crie ou disponibilize uma instância PostgreSQL e um banco de dados acessível ao usuário configurado.
2. Na raiz do projeto, crie o arquivo local do backend copiando o exemplo:

   ```powershell
   if (-not (Test-Path backend\.env)) { Copy-Item backend\.env.example backend\.env }
   ```

3. Se `backend\.env` já existir, preserve-o e edite-o localmente, sem sobrescrever dados existentes. Não compartilhe nem versione credenciais.

| Variável | Uso | Exemplo não secreto no arquivo de referência |
|---|---|---|
| `DB_DIALECT` | Dialeto do ORM | `postgres` |
| `DB_HOST` | Host do PostgreSQL | `localhost` |
| `DB_PORT` | Porta do PostgreSQL | `5432` |
| `DB_NAME` | Nome do banco já provisionado | `tarefas` |
| `DB_USER` | Usuário do banco | `postgres` |
| `DB_PASSWORD` | Senha fornecida pelo operador | Vazia no arquivo de exemplo; configure localmente |
| `DB_SSL` | Ativa configuração SSL quando igual a `true` | `false` |
| `PORT` | Porta HTTP da API; padrão no código: `3001` | `3001` |
| `CORS_ORIGIN` | Origem web permitida pelo CORS; padrão no código: `http://localhost:5173` | `http://localhost:8080` no exemplo |

O backend fixa o dialeto Sequelize como PostgreSQL no código; a variável `DB_DIALECT` do exemplo não é lida pela configuração atual. O código também não cria o banco de dados PostgreSQL: ele exige que o banco indicado por `DB_NAME` exista e esteja acessível.

Na inicialização, o backend autentica a conexão e executa `sync({ force: false })` para sincronizar o modelo. Não há script de migração ou seed identificado.

## Configuração do frontend

O frontend usa `VITE_API_URL` como endereço base da API. Se a variável não estiver definida, o código utiliza `http://localhost:3001/api`.

Para configurar explicitamente:

```powershell
if (-not (Test-Path frontend\.env)) { Copy-Item frontend\.env.example frontend\.env }
```

O arquivo de exemplo contém `VITE_API_URL=http://localhost:3001/api`. Ajuste o valor se a API estiver em outro host ou porta; mantenha o sufixo `/api` esperado pelo cliente.

O navegador envia requisições da origem do frontend para a API. Configure `CORS_ORIGIN` com a origem exata exibida pelo servidor de desenvolvimento do frontend. O código da API usa `http://localhost:5173` como padrão, enquanto `backend/.env.example` contém `http://localhost:8080`; essa divergência deve ser resolvida no ambiente antes do uso conjunto.

## Inicialização

Abra dois terminais na raiz do repositório.

No primeiro, inicie o backend:

```powershell
npm run dev:backend
```

No segundo, inicie o frontend:

```powershell
npm run dev:frontend
```

Use no navegador o endereço que o servidor frontend imprimir no terminal. A porta da API é `3001` por padrão. Para iniciar somente o frontend, o script equivalente é `npm run dev`.

O script `npm run dev:backend` inicia Node.js com `--watch`. O backend também declara `npm start` para execução sem modo watch a partir de `backend/`, mas o projeto não documenta um processo de produção completo.

## Verificação

### Verificação da API

Com API e banco ativos, solicite a lista:

```powershell
Invoke-RestMethod http://localhost:3001/api/tarefas
```

Uma lista vazia é uma resposta válida se ainda não houver tarefas cadastradas. Os endpoints estão detalhados na [documentação técnica](./04-documentacao-tecnica.md).

### Verificações automatizadas do frontend

Na raiz:

```powershell
npm test
npm run lint
npm run build
```

Os scripts de teste, lint e build da raiz encaminham a execução ao frontend. Eles não testam a conexão real com PostgreSQL nem os endpoints de ponta a ponta.

## Produção

O build frontend executa Vite/TanStack Start e gera artefatos Nitro com preset Cloudflare Module na configuração encontrada. Isso não comprova implantação pronta ou configuração de produção validada. O repositório não documenta hospedagem do backend, domínio, TLS, gestão de segredos, migrações de produção, monitoramento ou política de disponibilidade. A equipe deve definir e validar esses itens antes de disponibilizar o sistema ao cliente.

`server.js` é um exemplo separado que pode ser iniciado com `node server.js`; ele serve `index.html` e uma lista fixa em memória na porta `3000` (ou na variável `PORT`). Não é o processo da aplicação frontend/backend documentado acima.

## Solução de problemas

| Sintoma | Verificação |
|---|---|
| API encerra ao iniciar | Verifique host, porta, nome do banco, usuário, senha e disponibilidade do PostgreSQL. A aplicação só começa a escutar depois de autenticar e sincronizar o modelo. |
| Frontend não carrega tarefas | Confirme que o backend está ativo e que `VITE_API_URL` aponta para a raiz `/api` correta. |
| Erro de CORS no navegador | Faça `CORS_ORIGIN` corresponder exatamente à origem do frontend, incluindo protocolo, host e porta. |
| Porta ocupada | Encerre o processo proprietário ou configure uma porta disponível; atualize também a URL da API/origem CORS conforme aplicável. |
| Não é possível conectar ao banco | Confirme se o PostgreSQL está em execução, se o banco já existe e se as regras de rede permitem a conexão. |
| Erro de build | Verifique se as dependências do frontend foram instaladas e consulte a saída completa de `npm run build`. |

## Pendências de ambiente

- Confirmar versões suportadas de Node.js, npm, PostgreSQL e navegadores.
- Definir se a porta do frontend será a padrão do Vite ou outra e alinhar o exemplo CORS.
- Documentar provisionamento do banco, configuração SSL e procedimento de implantação real.
- Confirmar arquitetura de produção e endereço oficial de acesso.
