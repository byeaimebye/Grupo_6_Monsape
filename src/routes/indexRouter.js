const express = require("express");
let router = express.Router();
let { home,
    index,
    aboutUs,
    contact,
    politicaDeDevolucion,
    search,
    categorias    
    } = require("../controllers/indexController");

router.get("/", index);
router.get('/home', home);
router.get('/aboutUs', aboutUs);
router.get('/contact', contact);
router.get('/politicaDeDevolucion', politicaDeDevolucion);
router.get('/search', search); 
router.get('/categoria/:categoria', categorias);


module.exports = router;