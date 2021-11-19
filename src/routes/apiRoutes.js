const express = require("express");
let router = express.Router();
const {findOne, findAll, ordenarAlfabeticamente} = require("../controllers/apis/apiProductsController");
const {asignRolAdmin} = require("../controllers/apis/apiUsers");

router.get("/hola/:id", findOne);
router.get("/products", findAll);
router.get("/products/asc", ordenarAlfabeticamente);
router.get('/admin/userProfileEdit/:id', asignRolAdmin);

module.exports = router;