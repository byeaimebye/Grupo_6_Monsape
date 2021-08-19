const express = require("express");
let router = express.Router();

let {admin,
    products,
    charge,
    productCreate,
    edit,
productEdit } = require("../controllers/adminController");


/* GET - Admin  ----(login)----- */
router.get("/", admin);


/*GET - Admin products */
router.get("/products", products);
/*GET - Formulario de producto */
router.get('/cargaDeProducto', charge);

/* POST- Crear producto */
router.post('/cargaDeProducto', productCreate); 

 /* Editar productos*/
router.get('/editProduct/:id', edit);
router.put('/editProduct/:id', productEdit);




module.exports = router;