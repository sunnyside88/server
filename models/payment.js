const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    invoice_id:{ type : mongoose.Schema.Types.ObjectId, ref: 'Invoice'},
    pay_method_id: { type : mongoose.Schema.Types.ObjectId, ref: 'PayMethod'},
    total:Number,
    paid_amount:Number,
    change_amount:Number,
    status:String,
    createdBy:String,
}, { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema)
