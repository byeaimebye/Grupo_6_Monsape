var express = require('express');
var router = express.Router();
var controller = require("../controllers/homeController")
/* GET users listing. */
router.get('/', controller.home
);

module.exports = router;
