const express = require("express");
const router = express.Router();
const {tienda, productDetail, productCart, search, addToCart, detailDos} = require("../controllers/productController");

/* Tienda */
router.get("/tienda", tienda);
/* Detalle de producto */
router.get("/detail/:id", productDetail);/* 
router.post("/detail/:id", addToCart); */
/* Carrito de compras */
router.get("/cart", productCart);

router.get('/search', search);

router.get("/culia/", detailDos);
module.exports = router;