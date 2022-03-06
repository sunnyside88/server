const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    address: String,
    isDefault: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("location", locationSchema);
