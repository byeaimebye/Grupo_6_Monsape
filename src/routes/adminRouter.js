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
    login,
    processLogin,
    register,
    registerProcess,
    profile,
    editProfile,
    destroy,
    asignAdmin
 } = require("../controllers/adminController");
    let adminSession = require('../middlewares/adminSession');
    let chargeProductsValidator = require('../validations/chargeProductsValidator');


/* GET - Admin  ----(login)----- */
/* router.get("/", adminSession, products); */


/*GET - Admin products */
router.get('/products', /* adminSession, */ products);
/*GET - Formulario de producto */
router.get('/cargaDeProducto',/* adminSession, */ charge);

/* POST- Crear producto */
router.post('/cargaDeProducto', uploadFiles.single('image'), chargeProductsValidator, productCreate); 

 /* Editar productos*/
router.get('/editProduct/:id',  edit);
router.put('/editProduct/:id', uploadFiles.single('image'), chargeProductsValidator,productEdit);

/*delete eliminar productos*/
router.delete('/delete/:id', productDelete)
/*delete elimina usuarios el admin */
router.get('/userProfileAdmin/:id', /* adminSession, */ userToDelete)
//router.patch('/userProfileAdmin/:id', /* adminSession, */ asignAdmin);
router.delete('/userProfileAdmin/:id', userDelete)
//-------------------Rutas de Admin Users-------------------------
router.get('/usersTable', /*adminSession,*/ usersTable);
/* 
router.get("/probado-check/:id", edit); */
//Login, register y profile admin
router.get("/login", login);
router.post("/login", processLogin);
router.get("/register", register);
router.post("/register", registerProcess);
router.get("/profile/", profile);
router.put("/profile/", editProfile);
router.delete("/destroy/", destroy);

module.exports = router;