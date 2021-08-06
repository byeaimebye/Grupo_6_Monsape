var express = require('express');
var router = express.Router();
var controller = require("../controllers/usersController")
/* GET users listing. */
router.get('/login', controller.login
);

router.get('/register', controller.register
);

module.exports = router;
