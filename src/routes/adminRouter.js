const express = require("express");
let router = express.Router();

let {admin,
    products,
    charge} = require("../controllers/adminController");


/* GET - Admin*/
router.get("/", admin);
router.get('/cargaDeProducto', charge);

/*GET - Admin products */
router.get("/products", products);

module.exports = router;