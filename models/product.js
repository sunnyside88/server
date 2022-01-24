const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    code: { type: String, unique: true, required: true, dropDups: true },
    price: Number,
}, { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema)
