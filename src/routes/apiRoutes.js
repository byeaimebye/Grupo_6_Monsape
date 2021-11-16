const express = require("express");
let router = express.Router();
const {findOne, findAll, ordenarAlfabeticamente} = require("../controllers/apis/apiProductsController");

router.get("/hola/:id", findOne);
router.get("/products", findAll);
router.get("/products/asc", ordenarAlfabeticamente);

module.exports = router;