import Tarefa from "../model/tarefa.js";

function toApi(tarefa) {
  const dados = tarefa.toJSON();
  return {
    id: String(dados.id),
    title: dados.titulo,
    description: dados.descricao || "",
    dueDate: dados.dataVencimento || "",
    status: dados.situacao,
    createdAt: dados.criadoEm,
  };
}

function validarId(id) {
  const numero = Number(id);
  if (!Number.isInteger(numero) || numero <= 0) {
    const error = new Error("Informe um ID válido");
    error.status = 400;
    throw error;
  }
  return numero;
}

class ServiceTarefa {
  async buscar() {
    const tarefas = await Tarefa.findAll({
      order: [["criadoEm", "DESC"]],
    });
    return tarefas.map(toApi);
  }

  async buscarUm(id) {
    const tarefa = await Tarefa.findByPk(validarId(id));
    if (!tarefa) {
      const error = new Error("Tarefa não encontrada");
      error.status = 404;
      throw error;
    }
    return toApi(tarefa);
  }

  async criar(dados) {
    this.validarEntrada(dados);
    const tarefa = await Tarefa.create({
      titulo: dados.title.trim(),
      descricao: dados.description?.trim() || "",
      dataVencimento: dados.dueDate || null,
      situacao: "pendente",
    });
    return toApi(tarefa);
  }

  async alterar(id, dados) {
    const tarefa = await Tarefa.findByPk(validarId(id));
    if (!tarefa) {
      const error = new Error("Tarefa não encontrada");
      error.status = 404;
      throw error;
    }

    this.validarEntrada(dados);
    await tarefa.update({
      titulo: dados.title.trim(),
      descricao: dados.description?.trim() || "",
      dataVencimento: dados.dueDate || null,
      situacao: dados.status,
    });
    return toApi(tarefa);
  }

  async alternarSituacao(id) {
    const tarefa = await Tarefa.findByPk(validarId(id));
    if (!tarefa) {
      const error = new Error("Tarefa não encontrada");
      error.status = 404;
      throw error;
    }

    const novaSituacao = tarefa.situacao === "pendente" ? "concluida" : "pendente";
    await tarefa.update({ situacao: novaSituacao });
    return toApi(tarefa);
  }

  async deletar(id) {
    const tarefa = await Tarefa.findByPk(validarId(id));
    if (!tarefa) {
      const error = new Error("Tarefa não encontrada");
      error.status = 404;
      throw error;
    }
    await tarefa.destroy();
  }

  validarEntrada(dados) {
    if (!dados.title || dados.title.trim() === "") {
      const error = new Error("Informe o título da tarefa");
      error.status = 400;
      throw error;
    }
    if (dados.title.trim().length > 120) {
      const error = new Error("O título deve ter no máximo 120 caracteres");
      error.status = 400;
      throw error;
    }
    if (dados.description && dados.description.length > 1000) {
      const error = new Error("A descrição deve ter no máximo 1000 caracteres");
      error.status = 400;
      throw error;
    }
    if (dados.dueDate && !/^\d{4}-\d{2}-\d{2}$/.test(dados.dueDate)) {
      const error = new Error("Informe uma data válida no formato AAAA-MM-DD");
      error.status = 400;
      throw error;
    }
    if (dados.status && !["pendente", "concluida"].includes(dados.status)) {
      const error = new Error("Situação inválida");
      error.status = 400;
      throw error;
    }
  }
}

export default new ServiceTarefa();
