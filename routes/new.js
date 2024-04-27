const express = require('express');
const router = express.Router()
const messages = require("../public/javascripts/messages")

router.get("/", function(req, res, next) {
    res.render('form');
})

router.post("/", function(req, res, next) {
    const messageText = req.body.messageText;
    const username = req.body.username;
    messages.push({text: messageText, username: username, added: new Date()});
    res.redirect('/');
})

module.exports = router