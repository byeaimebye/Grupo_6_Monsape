const express = require("express");
const router = express.Router();
const {tienda, productDetail, productCart} = require("../controllers/productController");

/* Tienda */
router.get("/tienda", tienda);
/* Detalle de producto */
router.get("/detail/:id", productDetail);
/* Carrito de compras */
router.get("/cart", productCart);

module.exports = router;