const Invoice = require("../models/invoice");

module.exports = class InvoiceService {
  static async insertOneInvoice(data) {
    try {
      return await Invoice.create(data)
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllInvoices() {
    try {
      const allInvoices = await Invoice.find()
      return allInvoices
    } catch (err) {
      console.error('Could not fetch invoices', err)
    }
  }

  static async getInvoiceDetailsById(id) {
    try {
      const inv = await Invoice.findById(id)
      return inv
    } catch (err) {
      console.error('Could not fetch product details', err)
    }
  }
};
