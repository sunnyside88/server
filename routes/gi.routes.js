const express = require("express")

const GiCtrl = require("../controllers/gi.controller")

const router = require("./auth")

router.post("/gi/insertOne", GiCtrl.apiCreateGi)
router.get("/gis", GiCtrl.apiGetAllGi)
router.get("/gi/filterPopularItem", GiCtrl.apiFilterPopularItem)



module.exports = router