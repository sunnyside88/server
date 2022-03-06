const express = require("express")

const locationCtrl = require("../controllers/location.controller")

const router = require("./auth")

router.post("/locations/upsertOne", locationCtrl.apiCreateLocation)
router.get("/locations", locationCtrl.apiGetAllLocations)

module.exports = router