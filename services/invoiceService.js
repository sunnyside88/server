const Invoice = require("../models/invoice");
const Payment = require("../models/payment");
const GI = require("../models/gi");
module.exports = class InvoiceService {
  static async insertOneInvoice(data) {
    try {
      return await Invoice.create(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllInvoices() {
    try {
      const allInvoices = await Invoice.find();
      return allInvoices;
    } catch (err) {
      console.error("Could not fetch invoices", err);
    }
  }

  static async getInvoiceDetailsById(id) {
    try {
      const inv = await Invoice.findById(id);
      return inv;
    } catch (err) {
      console.error("Could not fetch product details", err);
    }
  }

  static async voidInvoice(id) {
    try {
      const inv = await Invoice.findById(id);
      return inv;
    } catch (err) {
      console.error("Could not fetch product details", err);
    }
  }

  static async updateInvoice(data) {
    try {
      let query = { _id: data._id };
      let pv_gi_query = { invoice_id: data._id };
      let updateData = JSON.parse(JSON.stringify(data));
      delete updateData._id;
      await Invoice.findOneAndUpdate(query, updateData);
      await Payment.findOneAndUpdate(pv_gi_query, updateData);
      await GI.findOneAndUpdate(pv_gi_query, updateData);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
