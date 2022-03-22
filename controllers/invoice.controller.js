"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllInvoices = exports.updateInvoice = exports.addInvoice = void 0;
const index_js_1 = require("../models/index.js");
const addInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield index_js_1.invoiceModel.create({
            items: req.body.items,
            notes: req.body.notes,
            status: req.body.status,
            email: req.body.email
        });
        return invoice;
    }
    catch (e) {
        console.log(e);
        return "cant add invoice";
    }
});
exports.addInvoice = addInvoice;
const updateInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const updated = yield index_js_1.invoiceModel.update({
            status: req.body.status,
        }, {
            where: { id: id },
        });
        return "status updated";
    }
    catch (_a) {
        return " cant update ";
    }
});
exports.updateInvoice = updateInvoice;
const getAllInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let status = req.query.status;
    try {
        if (status) {
            const allData = yield index_js_1.invoiceModel.findAll({ where: { status: status } });
            return allData;
        }
        else {
            const allData = yield index_js_1.invoiceModel.findAll();
            return allData;
        }
    }
    catch (_b) {
        return " cant get your data";
    }
});
exports.getAllInvoices = getAllInvoices;
