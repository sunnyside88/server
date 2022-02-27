const mongoose = require("mongoose")

const invoiceSchema = new mongoose.Schema({
    customer_id:{ type : mongoose.Schema.Types.ObjectId, ref: 'Contact'},
    stock_pick_id: String,
    cart:[{
        product_id:String,
        qty:Number,
        price:Number,
        uom:String,
        line_total:Number
    }],
    cart_total:Number,
    status:String,
}, { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema)
