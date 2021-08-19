const express = require("express");
let router = express.Router();

let {admin,
    products,
    charge,
productCreate} = require("../controllers/adminController");


/* GET - Admin*/
router.get("/", admin);
/*GET - Admin products */
router.get("/products", products);

/**GET crear producto */
router.get('/cargaDeProducto', charge);
/* POST- Crear producto */
router.post('/cargaDeProducto', productCreate); 

 /* */
router.get('/editProdcuts/:id', edict)
router.put('/editProduct/:id', )


module.exports = router;