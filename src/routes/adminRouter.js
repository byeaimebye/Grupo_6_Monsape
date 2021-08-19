const express = require("express");
let router = express.Router();

let {admin,
    products,
    charge,
productCreate} = require("../controllers/adminController");


/* GET - Admin*/
router.get("/", admin);
router.get('/cargaDeProducto', charge);

/* POST- Crear producto */
router.post('/cargaDeProducto', productCreate); 

/*GET - Admin products */
router.get("/products", products);

module.exports = router;