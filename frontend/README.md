# Jovem Programador em Ação

Desenvolva o projeto Tarefas do Jovem Programador conforme o prompt especificado.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6a3da12d-ea0f-4cdb-b6ff-fcce3109ba73).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Backend de tarefas

O backend usa Node.js, Express, Sequelize e PostgreSQL.

1. Copie `.env.example` para `.env`.
2. Informe os dados locais ou remotos do PostgreSQL em `.env`.
3. Instale as dependências:

```sh
npm install
```

4. Inicie o backend:

```sh
npm run dev:backend
```

5. Inicie o frontend em outro terminal:

```sh
npm run dev
```

### Endpoints

- `GET /api/tarefas`
- `GET /api/tarefas/:id`
- `POST /api/tarefas`
- `PUT /api/tarefas/:id`
- `PATCH /api/tarefas/:id/situacao`
- `DELETE /api/tarefas/:id`

A URL da API pode ser alterada pela variável `VITE_API_URL`.
