const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactController");

router.get("/contact", controller.index);

module.exports = router;