import express from "express";
import dotenv from "dotenv";
import invoice from "./routes/invoice.js";
import nodemailer from 'nodemailer';
import { schedule } from 'node-cron';
import { invoiceModel } from "./models";

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT;


app.get("/", (req: any, res: any) => {
  res.send("WORKING FINE !!!!!!!!!!")
});

schedule('* * * * *', async () => {
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secure: false, 
    port: 587,
    auth: {
      user: process.env.Email, 
      pass: process.env.Email_PASSWORD, 
    },
  });
  let test = await invoiceModel.findAll();
  for (let i = 0; i < test.length; i++) {
    let d: Date = new Date();
    let x: number = d.getTime();
    let y: number = test[i].dataValues.createdAt.getTime();
    if (x - y > (1000 * 60 * 60 * 24) && test[i].dataValues.status != "paid") {
      let options = {
        from: process.env.Email,
        to: test[i].dataValues.email,
        subject: "late invoice",
        text: test[i].dataValues.items[0]
      }
      transporter.sendMail(options, (err: any, info: any) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("sent", info.response);
      })
    }
  }
  console.log('running a task every minute');
});

app.use(invoice);

app.listen(port)


export default app


