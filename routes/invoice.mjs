"use strict";
import express from "express";
import {
  addInvoice,
  getAllInvoices,
  updateInvoice
} from "../controllers/invoice.controller.mjs"

const router = express.Router();

router.post("/invoices",async (req, res) => {
  try {
    const allData = await addInvoice(req);
    res.status(200).json(allData);
  } catch {
    res.status(500).json("Wrong");
  }
});

router.put("/invoices/:id", async (req, res) => {
  
  const allData = await updateInvoice(req);
  res.status(200).json(allData);

});


router.get("/invoices", async (req, res) => {
  
    const allData = await getAllInvoices(req);
    res.status(200).json(allData);
 
});




export default router;