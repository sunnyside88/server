const express = require("express")

const GrCtrl = require("../controllers/gr.controller")

const router = require("./auth")

router.post("/gr/insertOne", GrCtrl.apiCreateGr)
router.get("/grs", GrCtrl.apiGetAllGr)


module.exports = router