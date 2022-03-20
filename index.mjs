import express from "express";
import dotenv from "dotenv";
import invoice from "./routes/invoice.mjs";
// import nodemailer from 'nodemailer';


const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json("Test WORKING FINE !!!! ");
});



// const transporter = nodemailer.createTransport({
//   service:"hotmail",
//   secure:false,
//   auth:{

//       user:"kader.test@outlook.com",
//       pass:"test123456789"
//   },
// })

// const options={
//   from:"kader.test@outlook.com",
//   to:"thaerbraizat13@gmail.com",
//   subject:"kader test",
//   text:" owowowo i get it"
// }

// transporter.sendMail(options,(err,info)=>{

//       if(err){
//         console.log(err);
//         return;
//       }

//       console.log("sent" , info.response);
// })




app.use(invoice);

app.listen(port)


export default app