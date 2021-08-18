const express = require("express");
let router = express.Router();
let { home,
    index,
    aboutUs,
    contact,
    politicaDeDevolucion,
    error
    } = require("../controllers/indexController");

router.get("/", index);
router.get('/home', home);
router.get('/aboutUs', aboutUs);
router.get('/contact', contact);
router.get('/politicaDeDevolucion', politicaDeDevolucion);
router.get('/error', error);


module.exports = router;