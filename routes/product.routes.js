const express  = require ("express")
const multer  = require('multer')

const ProductCtrl = require("../controllers/product.controller")

const router = require("./auth")
const upload = multer({ dest: 'uploads/' })

router.get("/products", ProductCtrl.apiGetAllProducts)
router.get("/products/:id", ProductCtrl.apiGetProductDetails)
router.post("/products/upload", upload.single('file'), ProductCtrl.apiUploadProduct)

module.exports = router