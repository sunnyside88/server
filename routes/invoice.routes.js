const express = require("express")

const InvoiceCtrl = require("../controllers/invoice.controller")

const router = require("./auth")

router.post("/invoices/insertOne", InvoiceCtrl.apiCreateInvoice)
module.exports = router