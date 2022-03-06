const LocationService = require("../services/locationService");

module.exports = class Location {
  static async apiCreateLocation(req, res, next) {
    try {
      await LocationService.upsertLocation(req.body.data);
      res.status(200).json({ isCreated: true });
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }

  static async apiGetAllLocations(req, res, next) {
    try {
      const locs = await LocationService.getAllLocations();
      if (!locs) {
        res.status(404).json("No locations found in the database");
      }
      res.json(locs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};
