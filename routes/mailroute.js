const express = require("express");
const {sendMail, applyForJob} = require("../controllers/mailcontroller.js");
const mailrouter = express.Router();
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() });

mailrouter.post("/mail", sendMail);
mailrouter.post("/apply", upload.single("resume"), applyForJob);


module.exports = mailrouter;
