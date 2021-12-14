const Product = require("../models/product")

module.exports = class ProductService{
    static async getAllProduct(){
        try{
            const allProducts = await Product.find()
            return allProducts
        }catch (err){
            console.error('Could not fetch  products', err)
        }
    }

    static async getProductDetailsById(id){
        try{
            const product = await Product.findById(id)
            return product
        }catch (err){
            console.error('Could not fetch product details', err)
        }
    }
}