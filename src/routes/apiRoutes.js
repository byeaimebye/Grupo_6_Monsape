const express = require("express");
let router = express.Router();
const {findOne} = require("../controllers/apis/apiProductsController");

router.get("/hola/:id", findOne);

module.exports = router;