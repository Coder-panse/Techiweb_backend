const express = require("express");
const sendMail = require("../controllers/mailcontroller.js");
const mailrouter = express.Router();

mailrouter.post("/mail", sendMail);

module.exports = mailrouter;
