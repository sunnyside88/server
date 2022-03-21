const mongoose = require("mongoose")

const uomSchema = new mongoose.Schema({
    name:String,
}, { timestamps: true }
);

module.exports = mongoose.model("Uom", uomSchema)
