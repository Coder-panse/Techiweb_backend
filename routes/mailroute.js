const express = require("express");
const {sendMail, applyForJob} = require("../controllers/mailcontroller.js");
const mailrouter = express.Router();

mailrouter.post("/mail", sendMail);
mailrouter.post("/apply",applyForJob)

module.exports = mailrouter;
