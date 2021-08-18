const express = require("express");
let router = express.Router();
let { home,
    index,
    aboutUs,
    contact,
    politicaDeDevolucion,
    search,
    categorias,
    tienda /* TIENDA la dejo funcionando aca pero tiene que sumarse a products */
    } = require("../controllers/indexController");

router.get("/", index);
router.get('/home', home);
router.get('/aboutUs', aboutUs);
router.get('/contact', contact);
router.get('/politicaDeDevolucion', politicaDeDevolucion);
router.get('/tienda', tienda); /* recordar que tienda debe manejarse desde products */
router.get('/search', search); 
router.get('/categoria/:categoria', categorias);


module.exports = router;