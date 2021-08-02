const express = require("express");
const router = express.Router();
const controller = require("../controllers/productDetailController");

router.get("/productDetail", controller.index);

module.exports = router;