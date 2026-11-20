import ServiceTarefa from "../service/tarefa.js";

class ControllerTarefa {
  async buscar(req, res, next) {
    try {
      res.json(await ServiceTarefa.buscar());
    } catch (error) {
      next(error);
    }
  }

  async buscarUm(req, res, next) {
    try {
      res.json(await ServiceTarefa.buscarUm(req.params.id));
    } catch (error) {
      next(error);
    }
  }

  async criar(req, res, next) {
    try {
      const tarefa = await ServiceTarefa.criar(req.body);
      res.status(201).json(tarefa);
    } catch (error) {
      next(error);
    }
  }

  async alterar(req, res, next) {
    try {
      res.json(await ServiceTarefa.alterar(req.params.id, req.body));
    } catch (error) {
      next(error);
    }
  }

  async alternarSituacao(req, res, next) {
    try {
      res.json(await ServiceTarefa.alternarSituacao(req.params.id));
    } catch (error) {
      next(error);
    }
  }

  async deletar(req, res, next) {
    try {
      await ServiceTarefa.deletar(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new ControllerTarefa();
