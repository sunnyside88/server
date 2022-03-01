const mongoose = require("mongoose")

const payMethodSchema = new mongoose.Schema({
    name:String,
    service_charge:Number,
}, { timestamps: true }
);

module.exports = mongoose.model("PayMethod", payMethodSchema)
