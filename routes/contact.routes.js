const express = require("express")
const multer = require('multer')

const ContactCtrl = require("../controllers/contact.controller")

const router = require("./auth")

router.get("/contacts", ContactCtrl.apiGetAllContacts)
module.exports = router