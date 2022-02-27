const invoiceService = require("../services/invoiceService");

module.exports = class Contact {
  static async apiCreateInvoice(req, res, next) {
    try {
      await invoiceService.insertOneInvoice(req.body.data)
      res.status(200).json({ isCreated: true });
    } catch (err) {
      res.status(500).json({ error: err })
      console.log(err)
    }
  }

  static async apiGetInvoiceDetails(req, res, next) {
    try {
      const invoices = await invoiceService.getInvoiceDetailsById(req.params.id);
      if (!invoices) {
        res.status(404).json("No invoices found in the database")
      }
      res.json(invoices)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async apiGetAllInvoices(req, res, next) {
    try {
      const invoices = await invoiceService.getAllInvoices()
      if (!invoices) {
        res.status(404).json("No invoices found in the database")
      }
      res.json(invoices)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
};
