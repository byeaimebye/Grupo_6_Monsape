const express = require("express");
let router = express.Router();
const {findOne, findAll, ordenarAlfabeticamente} = require("../controllers/apis/apiProductsController");
const {asignRolAdmin, deleteUser} = require("../controllers/apis/apiUsers");

router.get("/hola/:id", findOne);
router.get("/products", findAll);
router.get("/products/asc", ordenarAlfabeticamente);
router.patch('/admin/edit/user/:id/:rol', asignRolAdmin);
router.delete('/admin/delete/user/:id', deleteUser);

module.exports = router;