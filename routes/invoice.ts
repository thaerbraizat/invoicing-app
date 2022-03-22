"use strict";
import express from "express";

import {
  addInvoice,
  getAllInvoices,
  updateInvoice
} from "../controllers/invoice.controller.js"

const router = express.Router();

router.post("/invoices",async (req, res) => {
  try {
    const allData = await addInvoice(req,res);
    res.status(200).json(allData);
  } catch {
    res.status(500).json("cant add invoice");
  }
});

router.put("/invoices/:id", async (req, res) => {
  const allData = await updateInvoice(req,res);
  res.status(200).json(allData);

});


router.get("/invoices", async (req, res) => {
    const allData = await getAllInvoices(req,res);
    res.status(200).json(allData);
 
});

export default router;