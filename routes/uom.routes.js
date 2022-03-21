const express = require("express");

const UomCtrl = require("../controllers/uom.controller");

const router = require("./auth");

router.post("/uoms/upsertOne", UomCtrl.apiCreateUom)
router.get("/uoms", UomCtrl.apiGetAllUom);
router.get("/uoms/:id", UomCtrl.apiGetUomDetails);
router.post("/uoms/deleteOne", UomCtrl.apiDeleteUom)

module.exports = router;
