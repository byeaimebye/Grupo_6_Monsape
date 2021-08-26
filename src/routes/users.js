const express = require('express');
const router = express.Router();
let {
    login,
    register,
    registerProcess,
    processLogin
    }  = require("../controllers/usersController");
    let registerValidator = require('../validations/registerValidator');

    let upload = require('../middlewares/uploadFiles'); 

    /* GET login */
router.get('/login', login);
router.post("/login", processLogin);

/*Get Register */
router.get('/register', register);
router.post('/register', /* upload.single("image"), */ registerValidator, registerProcess);

module.exports = router;

