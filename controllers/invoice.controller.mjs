import { invoiceModel } from "../models/index.mjs";


export const addInvoice = async (req, res) => {
  try {

    const invoice = await invoiceModel.create({
      items: req.body.items,
      notes: req.body.notes,
      status: req.body.status,
      email: req.body.email
    });

//     const options={
//       from:"kader.test@outlook.com",
//       to:req.body.email,
//       subject:`invoice `,
//       text:"new invoice added"
//     }
//     console.log("options",options);
//     transporter.sendMail(options,(err,info)=>{

//       if(err){
//         console.log("err",err);
//         return;
//       }
//       console.log("sent" , info.response);
// })

    return invoice;
  } catch (e) {
    console.log(e);
    return "na"
  }

};

export const updateInvoice = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updated = await invoiceModel.update(
      {
        status: req.body.status,
      },
      {
        where: { id: id },
      }
    );
    return "status updated";
  } catch {
    return " cant update "
  }

};


export const getAllInvoices = async (req, res) => {

  let status = req.query.status;
  try {
    if (status) {
      const allData = await invoiceModel.findAll({ where: { status: status } });
      return allData;
    } else {
      const allData = await invoiceModel.findAll();
      return allData;
    }
  } catch {
    return " cant get your data"
  }

};



