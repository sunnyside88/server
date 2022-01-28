const fs = require('fs')
const csv = require('fast-csv');

const ProductService = require("../services/productServices")
module.exports = class Product {
    static async apiGetAllProducts(req, res, next) {
        try {
            const products = await ProductService.getAllProduct();
            if (!products) {
                res.status(404).json("No products found in the database")
            }
            res.json(products)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }

    static async apiGetProductDetails(req, res, next) {
        try {
            const product = await ProductService.getProductDetailsById(req.params.id);
            if (!product) {
                res.status(404).json("No products found in the database")
            }
            res.json(product)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }

    static async apiDeleteProduct(req, res, next) {
        try {
            await ProductService.deleteOne(req.body.id)
            res.status(200).json("OK")
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }

    static async apiUploadProduct(req, res, next) {
        try {
            let stream = fs.createReadStream(req.file.path);
            let filerows = [];
            console.log(req.file, "xxxstream")
            stream.pipe(
                csv
                    .parse({ headers: true, ignoreEmpty: true })
                    .on('data', (data) => {
                        filerows.push(data);
                    })
                    .on('error', () => {
                        res.status(500).json({ message: 'Failed to upload' });
                    })
                    .on('end', async () => {
                        console.log(filerows, "xxxfilerow")
                        const result = await ProductService.insertProducts(filerows)
                        fs.unlinkSync(req.file.path);
                    })
            );
        } catch (err) {
            res.status(500).json({ error: err })
            console.log(err)
        }
    }
}