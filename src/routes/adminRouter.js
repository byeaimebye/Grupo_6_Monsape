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
    destroy
 } = require("../controllers/adminController");
    let adminSession = require('../middlewares/adminSession');


/* GET - Admin  ----(login)----- */
/* router.get("/", adminSession, products); */


/*GET - Admin products */
router.get('/products', adminSession, products);
/*GET - Formulario de producto */
router.get('/cargaDeProducto', adminSession, charge);
router.post('/cargaDeProducto', uploadFiles.single('image'), productCreate);
 /* Editar productos*/
router.get('/editProduct/:id', adminSession, edit);
router.put('/editProduct/:id', uploadFiles.single('image'), productEdit);
/*delete eliminar productos*/
router.delete('/delete/:id', productDelete)
/*delete elimina usuarios el admin */
router.get('/userProfileAdmin/:id', adminSession, userToDelete)
router.delete('/userProfileAdmin/:id', userDelete)
//-------------------Rutas de Admin Users-------------------------
router.get('/usersTable', adminSession, usersTable);
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