const express = require("express");
const router = express.Router();
const {tienda, productDetail, productCart, search, prueba, category} = require("../controllers/productController");

/* Tienda */
router.get("/tienda", tienda);
/* Detalle de producto */
router.get("/detail/:id", productDetail);
/* Carrito de compras */
router.get("/cart", productCart);

router.get('/search', search);

router.get("/category", category)


module.exports = router;