const express = require("express");
let router = express.Router();

let {admin,
    products,
    charge,
    productCreate,
    productEdit } = require("../controllers/adminController");


/* GET - Admin  ----(login)----- */
router.get("/", admin);


/*GET - Admin products */
router.get("/products", products);
/*GET - Formulario de producto */
router.get('/cargaDeProducto', charge);

/* POST- Crear producto */
router.post('/cargaDeProducto', productCreate); 

/*GET - Admin products */
router.get("/products", products);


/* GET editar producto */
router.get("/cargaDeProducto/:id", productEdit)

/* PUT editar producto */
router.put("")

module.exports = router;