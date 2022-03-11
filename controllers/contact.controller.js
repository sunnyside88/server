const contactService = require("../services/contactService");

module.exports = class Contact {
  static async apiCreateContact(req, res, next) {
    try {
      await contactService.upsertContact(req.body.data);
      res.status(200).json({ isCreated: true });
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }

  static async apiDeleteContact(req, res, next) {
    try {
      await contactService.deleteOne(req.body.id);
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async apiGetAllContacts(req, res, next) {
    try {
      const contacts = await contactService.getAllContacts();
      if (!contacts) {
        res.status(404).json("No products found in the database");
      }
      res.json(contacts);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};
