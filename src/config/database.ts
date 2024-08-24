import { Sequelize } from "sequelize";
import { config } from "./configurations";

export const database = new Sequelize(
  config.database.databaseName!,
  config.database.username!,
  config.database.password!,
  {
    host: config.database.host,
    dialect: "postgres",
    logging: config.database.logging === "true",
  }
);

export const connectToDatabase = async () => {
  try {
    await database.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit the process with failure code.
  }
};
