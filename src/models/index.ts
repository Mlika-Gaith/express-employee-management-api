// src/models/index.ts
import { CountryModel } from "./country.model";
import { UserModel } from "./user.model";
import { database } from "../config/database";
import { RegionModel } from "./region.model";
import { CityModel } from "./city.model";
import { RoleModel } from "./role.model";

// Initialize all models
CountryModel.initModel(database);
RegionModel.initModel(database);
CityModel.initModel(database);
UserModel.initModel(database);
RoleModel.initModel(database);

UserModel.belongsTo(CountryModel, { foreignKey: "countryId" });
UserModel.belongsTo(RegionModel, { foreignKey: "regionId" });
UserModel.belongsTo(CityModel, { foreignKey: "cityId" });
UserModel.belongsTo(RoleModel, { foreignKey: "roleId" });
RegionModel.belongsTo(CountryModel, { foreignKey: "countryId" });
CityModel.belongsTo(RegionModel, { foreignKey: "regionId" });

export { CountryModel, UserModel, RegionModel, CityModel, RoleModel };
