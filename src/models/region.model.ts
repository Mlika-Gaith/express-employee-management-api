import { DataTypes, Model } from "sequelize";
import { database } from "../config/database";

/**
 * Interface representing the  attributes of a Region model.
 *
 * @interface IRegionModel
 * @property {number} id - The unique identifier of the region.
 * @property {string} name - The name of the region.
 * @property {string} countryId - The unique identifier of the country that the region belongs to.
 * @property {Date} createdAt - Timestamp indicating when the region was created.
 * @property {Date} updatedAt - Timestamp indicating when the region was last updated.
 */
export interface IRegionModel {
  /**
   * The unique identifier of the region.
   * This field is auto-incremented and is the primary key.
   */
  id?: number;
  /**
   * The name of the region.
   * This field is required and cannot be null.
   */
  name: string;
  /**
   * The unique identifier of the country that the region belongs to.
   * This field is required and cannot be null.
   */
  countryId: string;
  /**
   * Timestamp indicating when the region was created.
   * This field is automatically managed by the database.
   */
  createdAt?: Date;
  /**
   * Timestamp indicating when the region was last updated.
   * This field is automatically managed by the database.
   */
  updatedAt?: Date;
}

/**
 * Represents a region in the database.
 * Extends sequelize's Model class to provide ORM capabilities.
 *
 * @class RegionModel
 * @extends {Model<IRegionModel>}
 * @implements {IRegionModel}
 */
export class RegionModel extends Model<IRegionModel> implements IRegionModel {
  public id!: number;
  public name!: string;
  public countryId!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  /**
   * Initializes the RegionModel with Sequelize.
   * Defines the schema for the 'regions' table and other configurations.
   *
   * @class RegionModel
   * @param sequelize - The Sequelize instance used to connect to the database.
   */
  static initModel(sequelize: typeof database) {
    RegionModel.init(
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
        countryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "regions",
        timestamps: true,
        underscored: true,
        modelName: "Region",
        indexes: [
          {
            unique: true,
            fields: ["name"],
          },
        ],
      }
    );
  }
}
