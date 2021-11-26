const express  = require ("express")
const ProductCtrl = require("../controllers/product.controller")
const router = require("./auth")

router.get("/products", ProductCtrl.apiGetAllProducts)

module.exports = router