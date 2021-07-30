const express = require("express");
const router = express.Router();
const controller = require("../controllers/productCartController");

router.get("/productCart", controller.index);

module.exports = router;