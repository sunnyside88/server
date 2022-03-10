const Gr = require("../models/gr");

module.exports = class GrService {
  static async insertOneGr(data) {
    try {
      return await Gr.create(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllGr() {
    try {
      const allGr = await Gr.find();
      return allGr;
    } catch (err) {
      console.error("Could not fetch gr", err);
    }
  }
};
