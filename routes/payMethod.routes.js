const express = require("express")

const payMethodCtrl = require("../controllers/payMethod.controller")

const router = require("./auth")

router.post("/payMethod/upsertOne", payMethodCtrl.apiCreatePayMethod)
router.get("/payMethods", payMethodCtrl.apiGetAllPayMethods)
router.get("/payMethod/:id", payMethodCtrl.apiGetMethodDetails)
router.post("/payMethod/deleteOne", payMethodCtrl.apiDeleteMethod)

module.exports = router