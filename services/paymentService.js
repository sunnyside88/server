const Payment = require("../models/payment");

module.exports = class PaymentService {
  static async insertOnePayment(data) {
    try {
      return await Payment.create(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllPayments() {
    try {
      const allPayments = await Payment.find();
      return allPayments;
    } catch (err) {
      console.error("Could not fetch invoices", err);
    }
  }
};
