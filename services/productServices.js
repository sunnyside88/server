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
}