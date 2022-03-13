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

  static async filterPopularItem() {
    try {
      const allGi = await Gi.aggregate([
        {
          $unwind: {
            path: "$stock_pick_lines",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $group: {
            _id: "$stock_pick_lines.product_name",
            total_qty: { $sum: "$stock_pick_lines.qty" },
          },
        },
        {
          $sort: { total_qty: -1 },
        },
      ]);
      return allGi;
    } catch (err) {
      console.error("Could not get filtered gi", err);
    }
  }
};
