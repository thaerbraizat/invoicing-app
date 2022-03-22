import { invoiceModel } from "../models/index.js";

// create invoice
export const addInvoice = async (req: any, res: any): Promise<any> => {
  try {
    const invoice = await invoiceModel.create({
      items: req.body.items,
      notes: req.body.notes,
      status: req.body.status,
      email: req.body.email
    });
    return invoice;
  } catch (e) {
    console.log(e);
    return "cant add invoice"
  }
};
//update status 
export const updateInvoice = async (req: any, res: any): Promise<any> => {
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
// get all invoices , filter invoices by status 
export const getAllInvoices = async (req: any, res: any): Promise<any> => {
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



