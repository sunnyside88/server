const express = require("express")

const InvoiceCtrl = require("../controllers/invoice.controller")

const router = require("./auth")

router.post("/invoices/insertOne", InvoiceCtrl.apiCreateInvoice)
router.get("/invoices", InvoiceCtrl.apiGetAllInvoices)
router.get("/invoices/:id", InvoiceCtrl.apiGetInvoiceDetails)

module.exports = router