const express = require('express');
const router = express.Router();

let {
    login,
    register
    }  = require("../controllers/usersController");


    /* GET users listing. */
router.get('/login', login);
router.get('/register', register);

module.exports = router;

