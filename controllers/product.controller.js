const ProductService = require("../services/productServices")

module.exports = class Product{
    static async apiGetAllProducts(req,res,next){
        try{
            const products = await ProductService.getAllProduct();
            if(!products){
                res.status(404).json("No products found in the database")
            }
            res.json(products)
        }catch(err){
            res.status(500).json({error:err})
        }
    }
}