const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: String,
    code: { type: String, unique: true, required: true, dropDups: true },
    phone: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
