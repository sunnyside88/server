const PayMethodService = require("../services/payMethodService");

module.exports = class PayMethod {
  static async apiCreatePayMethod(req, res, next) {
    try {
      await PayMethodService.upsertPayMethod(req.body.data);
      res.status(200).json({ isCreated: true });
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }

  static async apiGetMethodDetails(req, res, next) {
    try {
        const method = await PayMethodService.getMethodDetailsById(req.params.id);
        if (!method) {
            res.status(404).json("No products found in the database")
        }
        res.json(method)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

  static async apiDeleteMethod(req, res, next) {
    try {
        await PayMethodService.deleteOne(req.body.id)
        res.status(200).json("OK")
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

  static async apiGetAllPayMethods(req, res, next) {
    try {
      const methods = await PayMethodService.getAllPayMethods();
      if (!methods) {
        res.status(404).json("No products found in the database");
      }
      res.json(methods);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};
