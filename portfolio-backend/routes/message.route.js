const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controllers");

router.post("/message", messageController.saveMessage);

module.exports = router;