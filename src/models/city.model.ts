import { DataTypes, Model } from "sequelize";
import { database } from "../config/database";

/**
 * Interface representing the  attributes of a City model.
 *
 * @interface ICityModel
 * @property {number} id - The unique identifier of the city.
 * @property {string} name - The name of the city.
 * @property {number} regionId - The unique identifier of the region that the city belongs to.
 * @property {Date} createdAt - Timestamp indicating when the city was created.
 */
export interface ICityModel {
  /**
   * The unique identifier of the city.
   * This field is auto-incremented and is the primary key.
   */
  id?: number;
  /**
   * The name of the city.
   * This field is required and cannot be null.
   */
  name: string;
  /**
   * The unique identifier of the region that the city belongs to.
   * This field is required and cannot be null.
   */
  regionId: number;
  /**
   * Timestamp indicating when the city was created.
   * This field is automatically managed by the database.
   */
  createdAt?: Date;
  /**
   * Timestamp indicating when the city was last updated.
   * This field is automatically managed by the database.
   */
  updatedAt?: Date;
}

/**
 * Represents a city in the database.
 * Extends sequelize's Model class to provide ORM capabilities.
 *
 * @class CityModel
 * @extends {Model<ICityModel>}
 * @implements {ICityModel}
 */
export class CityModel extends Model<ICityModel> implements ICityModel {
  public id!: number;
  public name!: string;
  public regionId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  /**
   * Initializes the CityModel with Sequelize.
   * Defines the schema for the 'cities' table and other configurations.
   *
   * @param sequelize - The Sequelize instance used to connect to the database.
   */
  static initModel(sequelize: typeof database) {
    CityModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        regionId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "cities",
        timestamps: true,
        underscored: true,
        modelName: "City",
        indexes: [
          {
            unique: true,
            fields: ["id"],
          },
        ],
      }
    );
  }
}
