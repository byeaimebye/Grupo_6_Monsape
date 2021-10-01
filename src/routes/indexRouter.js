const express = require("express");
let router = express.Router();
let { home,
    index,
    indexProcess,
    aboutUs,
    contact,
    politicaDeDevolucion   
    } = require("../controllers/indexController");

router.get("/", index);
router.post("/", indexProcess);
router.get('/home', home);
router.get('/aboutUs', aboutUs);
router.get('/contact', contact);
router.get('/politicaDeDevolucion', politicaDeDevolucion);



module.exports = router;