# aula-exemplo-ia

Projeto centralizado com frontend e backend separados.

```text
frontend/
backend/
documentos/
prompts/
server.js
index.html
```

## Instalação

```powershell
npm run install:all
```

Configure `backend/.env` usando `backend/.env.example`.
Configure `frontend/.env` usando `frontend/.env.example`, se necessário.

## Execução

Backend:

```powershell
npm run dev:backend
```

Frontend em outro terminal:

```powershell
npm run dev:frontend
```

## Validação

```powershell
npm test
npm run lint
npm run build
```
