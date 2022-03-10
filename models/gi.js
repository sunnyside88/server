const mongoose = require("mongoose")

const giSchema = new mongoose.Schema({
    invoice_id:{ type : mongoose.Schema.Types.ObjectId, ref: 'Invoice'},
    from_location: String,
    to_location: String,
    stock_pick_lines:[{
        product_id:{ type : mongoose.Schema.Types.ObjectId, ref: 'Product'},
        product_name:String,
        product_code:String,
        qty:Number,
        uom:String,
    }],
    status:String,
    createdBy:String,
}, { timestamps: true }
);

module.exports = mongoose.model("GI", giSchema)
