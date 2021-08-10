const express = require("express");
const router = express.Router();

const controller = require("../controllers/politicaDevolucionController.js");

router.get("/", controller.index);

module.exports = router;