import { Sequelize } from "sequelize";
import { config } from "./configurations";

/**
 * Creates an instance of Sequelize to connect to the PostgresSQL database.
 * @param {string} config.database.databaseName - The name of the database.
 * @param {string} config.database.username - The username to connect to the database.
 * @param {string} config.database.password - The password to connect to the database.
 * @param {string} config.database.host - The host of the database.
 * @parma {string} config.database.logging - The logging configuration for the database (enable or disable SQL logging).
 */
export const database = new Sequelize(
  config.database.databaseName!,
  config.database.username!,
  config.database.password!,
  {
    host: config.database.host,
    dialect: "postgres",
    logging: console.log,
  }
);

/**
 * Connects to the database and authenticates the connection.
 * @throws {Error} - Throws an error if the connection to the database fails.
 */
export const connectToDatabase = async () => {
  try {
    await database.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit the process with failure code.
  }
};
