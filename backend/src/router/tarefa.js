import express from "express";

import ControllerTarefa from "../controller/tarefa.js";

const routerTarefa = express.Router();

routerTarefa.get("/", ControllerTarefa.buscar);
routerTarefa.get("/:id", ControllerTarefa.buscarUm);
routerTarefa.post("/", ControllerTarefa.criar);
routerTarefa.put("/:id", ControllerTarefa.alterar);
routerTarefa.patch("/:id/situacao", ControllerTarefa.alternarSituacao);
routerTarefa.delete("/:id", ControllerTarefa.deletar);

export default routerTarefa;
