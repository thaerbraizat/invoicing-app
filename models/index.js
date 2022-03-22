"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceModel = void 0;
const index_js_1 = __importDefault(require("../databaseConnection/index.js"));
const sequelize_1 = __importDefault(require("sequelize"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const invoiceSchema_js_1 = __importDefault(require("./invoiceSchema.js"));
index_js_1.default.sync();
exports.invoiceModel = (0, invoiceSchema_js_1.default)(index_js_1.default, sequelize_1.default.DataTypes);
