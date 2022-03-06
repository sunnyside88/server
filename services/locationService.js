const location = require("../models/location");
var mongoose = require("mongoose");

module.exports = class PayMethodService {
  static async upsertLocation(data) {
    try {
      let updateData = JSON.parse(JSON.stringify(data));
      delete updateData._id;
      let query = { _id: data._id };
      if (!query._id) {
        query._id = new mongoose.mongo.ObjectId();
      }
      await location.findOneAndUpdate(query, updateData, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllLocations() {
    try {
      const allLocations = await location.find();
      return allLocations;
    } catch (err) {
      console.error("Could not fetch location", err);
    }
  }
};
