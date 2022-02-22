const Invoice = require("../models/invoice");

module.exports = class InvoiceService {
  static async insertOneInvoice(data) {
    try {
        await Invoice.create(data)
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
