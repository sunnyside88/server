const express = require("express")

const PaymentCtrl = require("../controllers/payment.controller")

const router = require("./auth")

router.post("/payments/insertOne", PaymentCtrl.apiCreatePayment)
router.get("/payments", PaymentCtrl.apiGetAllPayments)

module.exports = router