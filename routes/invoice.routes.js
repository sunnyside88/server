const express = require("express")

const InvoiceCtrl = require("../controllers/invoice.controller")

const router = require("./auth")

router.post("/invoices/insertOne", InvoiceCtrl.apiCreateInvoice)
router.get("/invoices", InvoiceCtrl.apiGetAllInvoices)
module.exports = router