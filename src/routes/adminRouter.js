const express = require("express");
let router = express.Router();
let uploadFiles = require('../middlewares/uploadFiles');
let {admin,
    products,
    charge,
    productCreate,
    edit,
    productEdit,
    productDelete,
    usersTable } = require("../controllers/adminController");
    let adminSession = require('../middlewares/adminSession');


/* GET - Admin  ----(login)----- */
/* router.get("/", adminSession, products); */


/*GET - Admin products */
router.get('/products', products);
/*GET - Formulario de producto */
router.get('/cargaDeProducto', charge);

/* POST- Crear producto */
router.post('/cargaDeProducto', uploadFiles.single('image'), productCreate); 

 /* Editar productos*/
router.get('/editProduct/:id',  edit);
router.put('/editProduct/:id', uploadFiles.single('image'), productEdit);

/*delete eliminar productos*/
router.delete('/delete/:id', productDelete)

//-------------------Rutas de Admin Users-------------------------
router.get('/usersTable', usersTable);



module.exports = router;