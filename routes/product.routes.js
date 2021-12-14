const express  = require ("express")
const ProductCtrl = require("../controllers/product.controller")
const router = require("./auth")

router.get("/products", ProductCtrl.apiGetAllProducts)
router.get("/products/:id", ProductCtrl.apiGetProductDetails)

module.exports = router