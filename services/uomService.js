const Uom = require("../models/uom");
var mongoose = require("mongoose");

module.exports = class UomService {
  static async insertOneUom(data) {
    try {
      return await Uom.create(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllUom() {
    try {
      const allUom = await Uom.find();
      return allUom;
    } catch (err) {
      console.error("Could not fetch uom", err);
    }
  }

  static async getUomDetailsById(id) {
    try {
      const uom = await Uom.findById(id);
      return uom;
    } catch (err) {
      console.error("Could not fetch uom details", err);
    }
  }
  static async upsertUom(data) {
    try {
      let updateData = JSON.parse(JSON.stringify(data));
      delete updateData._id;
      let query = { _id: data._id };
      if (!query._id) {
        query._id = new mongoose.mongo.ObjectId();
      }
      await Uom.findOneAndUpdate(query, updateData, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteOne(id) {
    try {
      await Uom.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
