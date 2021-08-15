const express = require("express");
let router = express.Router();

let {admin} = require("../controllers/adminController");

router.get("/admin", admin);

module.exports = router;