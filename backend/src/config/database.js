import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

class Database {
  constructor() {
    this.init();
  }

  init() {
    const ssl = process.env.DB_SSL === "true";

    this.db = new Sequelize({
      dialect: "postgres",
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      dialectOptions: ssl
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {},
      logging: false,
    });
  }
}

export default new Database();
