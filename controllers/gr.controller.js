const grService = require("../services/grService");

module.exports = class Gr {
  static async apiGetAllGr(req, res, next) {
    try {
      const gr = await grService.getAllGr();
      if (!gr) {
        res.status(404).json("No gr found in the database");
      }
      res.json(gr);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async apiCreateGr(req, res, next) {
    try {
      const doc = await grService.insertOneGr(req.body.data);
      res.json(doc);
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }
  static async apiGetGrDetails(req, res, next) {
    try {
      const gr = await grService.getGrDetailsById(req.params.id);
      if (!gr) {
        res.status(404).json("No invoices found in the database")
      }
      res.json(gr)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

};
