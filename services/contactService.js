const Contact = require("../models/contact")

module.exports = class ContactService {
    static async getAllContacts() {
        try {
            const allContacts = await Contact.find()
            return allContacts
        } catch (err) {
            console.error('Could not fetch  products', err)
        }
    }
}