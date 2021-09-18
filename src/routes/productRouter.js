const express = require("express");
const router = express.Router();
const {tienda, productDetail, productCart, search, categorias, prueba} = require("../controllers/productController");

/* Tienda */
router.get("/tienda", tienda);
/* Detalle de producto */
router.get("/detail/:id", productDetail);
/* Carrito de compras */
router.get("/", productCart);

router.get('/search', search); 

router.get('/categoria/:categoria', categorias);

module.exports = router;