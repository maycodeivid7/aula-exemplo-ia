import database from "../config/database.js";

class Tarefa {
  constructor() {
    this.model = database.db.define(
      "tarefa",
      {
        id: {
          type: database.db.Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titulo: {
          type: database.db.Sequelize.STRING(120),
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        descricao: {
          type: database.db.Sequelize.STRING(1000),
          allowNull: false,
          defaultValue: "",
        },
        dataVencimento: {
          type: database.db.Sequelize.DATEONLY,
          allowNull: true,
        },
        situacao: {
          type: database.db.Sequelize.ENUM("pendente", "concluida"),
          allowNull: false,
          defaultValue: "pendente",
        },
      },
      {
        tableName: "tarefas",
        createdAt: "criadoEm",
        updatedAt: false,
      },
    );
  }
}

export default new Tarefa().model;
