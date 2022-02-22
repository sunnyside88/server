const invoiceService = require("../services/invoiceService");

module.exports = class Contact {
  static async apiCreateInvoice(req, res, next) {
    try {
        await invoiceService.insertOneInvoice(req.body.data)
        res.status(200).json({isCreated: true});
    } catch (err) {
        res.status(500).json({ error: err })
        console.log(err)
    }
  }
};
