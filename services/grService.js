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

  static async getGrDetailsById(id) {
    try {
      const gr = await Gr.findById(id)
      return gr
    } catch (err) {
      console.error('Could not fetch Gr details', err)
    }
  }

};
