const uomService = require("../services/uomService");

module.exports = class uom {
  static async apiGetAllUom(req, res, next) {
    try {
      const uom = await uomService.getAllUom();
      if (!uom) {
        res.status(404).json("No uom found in the database");
      }
      res.json(uom);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async apiCreateUom(req, res, next) {
    try {
        await uomService.upsertUom(req.body.data);
        res.status(200).json({ isCreated: true });
      } catch (err) {
        res.status(500).json({ error: err });
        console.log(err);
      }
  }

  static async apiDeleteUom(req, res, next) {
    try {
      await uomService.deleteOne(req.body.id);
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async apiGetUomDetails(req, res, next) {
    try {
      const uom = await uomService.getUomDetailsById(req.params.id);
      if (!uom) {
        res.status(404).json("No uom found in the database")
      }
      res.json(uom)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
};
