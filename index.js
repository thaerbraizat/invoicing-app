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
const dotenv_1 = __importDefault(require("dotenv"));
const invoice_js_1 = __importDefault(require("./routes/invoice.js"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const node_cron_1 = require("node-cron");
const models_1 = require("./models");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("WORKING FINE !!!!!!!!!!");
});
(0, node_cron_1.schedule)('* * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp-mail.outlook.com",
        secure: false,
        port: 587,
        auth: {
            user: process.env.Email,
            pass: process.env.Email_PASSWORD,
        },
    });
    let test = yield models_1.invoiceModel.findAll();
    for (let i = 0; i < test.length; i++) {
        let d = new Date();
        let x = d.getTime();
        let y = test[i].dataValues.createdAt.getTime();
        if (x - y > (1000 * 60 * 60 * 24) && test[i].dataValues.status != "paid") {
            let options = {
                from: process.env.Email,
                to: test[i].dataValues.email,
                subject: "late invoice",
                text: test[i].dataValues.items[0]
            };
            transporter.sendMail(options, (err, info) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("sent", info.response);
            });
        }
    }
    console.log('running a task every minute');
}));
app.use(invoice_js_1.default);
app.listen(port);
exports.default = app;
