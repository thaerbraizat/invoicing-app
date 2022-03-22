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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoice_controller_js_1 = require("../controllers/invoice.controller.js");
const router = express_1.default.Router();
router.post("/invoices", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allData = yield (0, invoice_controller_js_1.addInvoice)(req, res);
        res.status(200).json(allData);
    }
    catch (_a) {
        res.status(500).json("Wrong");
    }
}));
router.put("/invoices/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield (0, invoice_controller_js_1.updateInvoice)(req, res);
    res.status(200).json(allData);
}));
router.get("/invoices", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield (0, invoice_controller_js_1.getAllInvoices)(req, res);
    res.status(200).json(allData);
}));
exports.default = router;
