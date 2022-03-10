const Gi = require("../models/gi");

module.exports = class GiService {
  static async insertOneGi(data) {
    try {
      return await Gi.create(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllGi() {
    try {
      const allGi = await Gi.find();
      return allGi;
    } catch (err) {
      console.error("Could not fetch gi", err);
    }
  }
};
