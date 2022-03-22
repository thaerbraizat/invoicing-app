import sequelizeDB from '../databaseConnection/index.js'
import sequelize from 'sequelize'
import dotenv from "dotenv";
dotenv.config();

import invoiceSchema from './invoiceSchema.js';

sequelizeDB.sync()
export const invoiceModel = invoiceSchema(sequelizeDB,sequelize.DataTypes);
