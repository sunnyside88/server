const PaymentService = require("../services/paymentService");

module.exports = class Payment {
  static async apiCreatePayment(req, res, next) {
    try {
      await PaymentService.insertOnePayment(req.body.data)
      res.status(200).json({ isCreated: true });
    } catch (err) {
      res.status(500).json({ error: err })
      console.log(err)
    }
  }

  static async apiGetAllPayments(req, res, next) {
    try {
      const payments = await PaymentService.getAllPayments()
      if (!payments) {
        res.status(404).json("No invoices found in the database")
      }
      res.json(payments)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
};
