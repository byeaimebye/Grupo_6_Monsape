const express = require("express");
let router = express.Router();
let { home,
    index,
    aboutUs
    } = require("../controllers/indexController");

router.get("/", index);
router.get('/home', home);
router.get('/aboutUs', aboutUs);


module.exports = router;