// src/migrations/create-tables.ts
import {
  CountryModel,
  UserModel,
  RegionModel,
  CityModel,
  RoleModel,
} from "../models";

const migrate = async () => {
  try {
    // Ensure all models are initialized
    await CountryModel.sync(); // add { force: true } to drop and recreate tables
    await RegionModel.sync(); // add { force: true } to drop and recreate tables
    await CityModel.sync(); // add { force: true } to drop and recreate tables
    await UserModel.sync({ force: true }); // add { force: true } to drop and recreate tables
    await RoleModel.sync(); // add { force: true } to drop and recreate tables
    console.log("Database migration completed successfully.");
  } catch (error) {
    console.error("Error during migration:", error);
  } finally {
    process.exit(0); // Exit the process
  }
};

migrate();
