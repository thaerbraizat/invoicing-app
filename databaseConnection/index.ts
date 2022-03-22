import {Dialect, Sequelize} from 'sequelize'
import dotenv from "dotenv";
dotenv.config();

const database = process.env.DB_NAME as string
const username = process.env.DB_USER as string
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const dialect = process.env.DB_DILECT as Dialect
const sequelizeDB = new Sequelize(database, username, password, {
        host: host,
        dialect: dialect
      })
export default sequelizeDB;

