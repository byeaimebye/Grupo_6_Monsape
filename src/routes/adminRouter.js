const express = require("express");
let router = express.Router();

let {admin, charge} = require("../controllers/adminController");

router.get("/", admin);
router.get('/cargaDeProducto', charge);


module.exports = router;