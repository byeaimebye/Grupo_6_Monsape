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
    usersTable,
    userToDelete,
userDelete,

 } = require("../controllers/adminController");
    let adminSession = require('../middlewares/adminSession');
    let chargeProductsValidator = require('../validations/chargeProductsValidator');


/* GET - Admin  ----(login)----- */
/* router.get("/", adminSession, products); */


/*GET - Admin products */
router.get('/products',/* adminSession, */ products);
/*GET - Formulario de producto */
router.get('/cargaDeProducto',/* adminSession, */ charge);

/* POST- Crear producto */
router.post('/cargaDeProducto', chargeProductsValidator,uploadFiles.single('image'), productCreate); 

 /* Editar productos*/
router.get('/editProduct/:id',  edit);
router.put('/editProduct/:id', chargeProductsValidator,uploadFiles.single('image'), productEdit);

/*delete eliminar productos*/
router.delete('/delete/:id', productDelete)
/*delete elimina usuarios el admin */
router.get('/userProfileAdmin/:id', userToDelete)
router.delete('/userProfileAdmin/:id', userDelete) 



//-------------------Rutas de Admin Users-------------------------
router.get('/usersTable', usersTable);
/* 
router.get("/probado-check/:id", edit); */

module.exports = router;