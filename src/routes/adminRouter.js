const express = require("express");
let router = express.Router();

let {admin,
    products} = require("../controllers/adminController");

/* GET - Admin*/
router.get("/", admin);

/*GET - Admin products */
router.get("/products", products);

module.exports = router;