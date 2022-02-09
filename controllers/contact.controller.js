const contactService = require("../services/contactService")

module.exports = class Contact {
    static async apiGetAllContacts(req, res, next) {
        try {
            const contacts = await contactService.getAllContacts();
            if (!contacts) {
                res.status(404).json("No products found in the database")
            }
            res.json(contacts)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
}