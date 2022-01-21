const { mongoose } = require("mongoose")
const Product = require("../models/product")

module.exports = class ProductService {
    static async getAllProduct() {
        try {
            const allProducts = await Product.find()
            return allProducts
        } catch (err) {
            console.error('Could not fetch  products', err)
        }
    }

    static async getProductDetailsById(id) {
        try {
            const product = await Product.findById(id)
            return product
        } catch (err) {
            console.error('Could not fetch product details', err)
        }
    }

    static async insertProducts(data) {
        try {
            await Product.bulkWrite(data.map(x => ({
                updateOne: {
                    filter: { code: x.code },
                    update: x,
                    upsert: true,
                }
            })))
        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    static async deleteOne(id) {
        try {
            console.log("xxxid", id)
            await Product.findByIdAndDelete(id)
        } catch (err) {
            console.log(err)
            throw (err)
        }
    }
}