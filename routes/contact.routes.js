const express = require("express")
const multer = require('multer')

const ContactCtrl = require("../controllers/contact.controller")

const router = require("./auth")

router.get("/contacts", ContactCtrl.apiGetAllContacts)

router.post("/contacts/upsertOne", ContactCtrl.apiCreateContact)
router.post("/contacts/deleteOne", ContactCtrl.apiDeleteContact)

module.exports = router