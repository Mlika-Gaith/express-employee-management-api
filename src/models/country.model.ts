import { DataTypes, Model } from "sequelize";
import { database } from "../config/database";

/**
 * Interface representing the attributes of a Country model.
 *
 * @interface ICountryModel
 * @property {number} id - The unique identifier of the country.
 * @property {string} name - The name of the country.
 * @property {string} code - The code of the country.
 * @property {string} phoneCode - The phone code of the country.
 * @property {string} currency - The currency of the country.
 * @property {Date} createdAt - Timestamp indicating when the country was created.
 * @property {Date} updatedAt - Timestamp indicating when the country was last updated.
 */
export interface ICountryModel {
  /**
   * The unique identifier of the country.
   * This field is auto-incremented and is the primary key.
   */
  id?: number;
  /**
   * The name of the country.
   * This field is required and cannot be null.
   */
  name: string;
  /**
   * The code of the country.
   * This field is required and cannot be null.
   */
  code: string;
  /**
   * The phone code of the country.
   * This field is required and cannot be null.
   */
  phoneCode: string;
  /**
   * The currency of the country.
   * This field is required and cannot be null.
   */
  currency: string;
  /**
   * Timestamp indicating when the country was created.
   * This field is automatically managed by the database.
   */
  createdAt?: Date;
  /**
   * Timestamp indicating when the country was last updated.
   * This field is automatically managed by the database.
   */
  updatedAt?: Date;
}

/**
 * Represents a country in the database.
 * Extends sequelize's Model class to provide ORM capabilities.
 *
 * @class CountryModel
 * @extends {Model<ICountryModel>}
 * @implements {ICountryModel}
 */
export class CountryModel
  extends Model<ICountryModel>
  implements ICountryModel
{
  public id!: number;
  public name!: string;
  public code!: string;
  public phoneCode!: string;
  public currency!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  /**
   * Initializes the CountryModel with Sequelize.
   * Defines the schema for the 'countries' table and other configurations.
   *
   * @param sequelize - The Sequelize instance used to connect to the database.
   */
  static initModel(sequelize: typeof database) {
    CountryModel.init(
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
        code: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        phoneCode: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        currency: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "countries",
        timestamps: true,
        underscored: true,
        modelName: "Country",
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
