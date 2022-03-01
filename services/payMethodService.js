const PayMethod = require("../models/payMethod");
var mongoose = require("mongoose");

module.exports = class PayMethodService {
  static async upsertPayMethod(data) {
    try {
      let updateData = JSON.parse(JSON.stringify(data));
      delete updateData._id;
      let query = { _id: data._id };
      if (!query._id) {
        query._id = new mongoose.mongo.ObjectId();
      }
      await PayMethod.findOneAndUpdate(query, updateData, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getMethodDetailsById(id) {
    try {
      const method = await PayMethod.findById(id);
      return method;
    } catch (err) {
      console.error("Could not fetch pay method details", err);
    }
  }

  static async getAllPayMethods() {
    try {
      const allPayMethods = await PayMethod.find();
      return allPayMethods;
    } catch (err) {
      console.error("Could not fetch  pay methods", err);
    }
  }

  static async deleteOne(id) {
    try {
      await PayMethod.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
