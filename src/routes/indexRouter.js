const express = require("express");
let router = express.Router();
let { home,
    index,
    aboutUs,
    contact,
    politicaDeDevolucion,
    error,
    tienda /*la dejo funcionando aca pero tiene que sumarse a products */
    } = require("../controllers/indexController");

router.get("/", index);
router.get('/home', home);
router.get('/aboutUs', aboutUs);
router.get('/contact', contact);
router.get('/politicaDeDevolucion', politicaDeDevolucion);
router.get('/error', error);
router.get('/tienda', tienda);


module.exports = router;