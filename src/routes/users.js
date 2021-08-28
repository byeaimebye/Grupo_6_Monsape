const express = require('express');
const router = express.Router();
let {
    login,
    register,
    registerProcess }  = require("../controllers/usersController");

let registerValidator = require('../validations/registerValidator');

    /* GET login */
router.get('/login', login);

/*Get Register */
router.get('/register', register);
router.post('/register', registerProcess, registerValidator);

module.exports = router;

