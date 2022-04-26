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

  static async updatePayment(data) {
    try {
      let query = { _id: data._id };
      let updateData = JSON.parse(JSON.stringify(data));
      delete updateData._id;
      await Payment.findOneAndUpdate(query, data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
