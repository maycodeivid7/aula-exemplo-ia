import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import database from "./src/config/database.js";
import routerTarefa from "./src/router/tarefa.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  }),
);
app.use(express.json());

app.use("/api/tarefas", routerTarefa);

app.use((req, res) => {
  res.status(404).json({ message: "Recurso não encontrado" });
});

app.use((error, req, res, next) => {
  console.error(error);
  const status = error.status || 500;
  res.status(status).json({
    message: status === 500 ? "Erro interno do servidor" : error.message,
  });
});

database.db
  .authenticate()
  .then(() => database.db.sync({ force: false }))
  .then(() => {
    app.listen(port, () => {
      console.log(`API de tarefas disponível em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Não foi possível iniciar o servidor:", error.message);
    process.exit(1);
  });
