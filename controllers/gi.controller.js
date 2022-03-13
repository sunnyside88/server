const giService = require("../services/giService");

module.exports = class Gi {
  static async apiGetAllGi(req, res, next) {
    try {
      const gi = await giService.getAllGi();
      if (!gi) {
        res.status(404).json("No gi found in the database");
      }
      res.json(gi);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async apiCreateGi(req, res, next) {
    try {
      const doc = await giService.insertOneGi(req.body.data);
      res.json(doc);
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }

  static async apiFilterPopularItem(req, res, next) {
    try {
      const gi = await giService.filterPopularItem();
      if (!gi) {
        res.status(404).json("No gi found in the database");
      }
      res.json(gi);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};
