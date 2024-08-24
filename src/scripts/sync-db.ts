import { database } from "../config/database";
import { CountryModel } from "../models/country.model"; // Import all models
import { RegionModel } from "../models/region.model"; // Import all models
import { CityModel } from "../models/city.model"; // Import all models
import { UserModel } from "../models/user.model"; // Import all models
import { RoleModel } from "../models/role.model"; // Import all models

const syncDatabase = async () => {
  try {
    // Ensure all models are initialized before syncing
    await database.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    // Sync all models with the database
    await database.sync({ force: true }); // Use force: true to drop and recreate tables, or remove it to only create missing tables
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
};

syncDatabase().finally(() => {
  process.exit(0); // Exit after synchronization
});
