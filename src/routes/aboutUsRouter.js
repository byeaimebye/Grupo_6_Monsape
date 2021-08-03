var express = require('express');
var router = express.Router();
var controller = require("../controllers/aboutUsController")
/* GET users listing. */
router.get('/', controller.aboutUs
);

module.exports = router;
