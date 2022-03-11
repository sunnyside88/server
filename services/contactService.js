const Contact = require("../models/contact");
var mongoose = require("mongoose");
module.exports = class ContactService {
  static async getAllContacts() {
    try {
      const allContacts = await Contact.find();
      return allContacts;
    } catch (err) {
      console.error("Could not fetch  products", err);
    }
  }

  static async upsertContact(data) {
    try {
      let updateData = JSON.parse(JSON.stringify(data));
      delete updateData._id;
      let query = { _id: data._id };
      if (!query._id) {
        query._id = new mongoose.mongo.ObjectId();
      }
      await Contact.findOneAndUpdate(query, updateData, {
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
      await Contact.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
