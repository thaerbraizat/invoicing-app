import sequelizeDB from '../databaseConnection/index.mjs'
import sequelize from 'sequelize'
import dotenv from "dotenv";
dotenv.config();

import invoiceSchema from './invoiceSchema.mjs';


sequelizeDB.sync()
export const invoiceModel = invoiceSchema(sequelizeDB,sequelize.DataTypes);
