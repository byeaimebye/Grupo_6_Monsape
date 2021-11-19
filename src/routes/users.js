const express = require('express');
const router = express.Router();
let {
    login,
    register,
    registerProcess,
    processLogin,
    logout,
    profile,
    editProfile,
    deleteCount,
    destroyUser
    }  = require("../controllers/usersController");
    let registerValidator = require('../validations/registerValidator');
    let loginValidator = require('../validations/loginValidator');
    let profileValidator = require('../validations/profileValidator');
    let upload = require('../middlewares/usersUploadFiles'); 
    let userSession = require('../middlewares/userSession');

    /* GET login */
router.get('/login', login);
router.post("/login", loginValidator, processLogin);
router.get('/logout', logout);

/*Get Register */
router.get('/register', register);
router.post('/register', /* upload.single("image"), */ registerValidator, registerProcess);

/* Get Profile */
router.get("/profile/", userSession, profile);
router.put("/profile", upload.single("avatar"), profileValidator, editProfile);

router.get("/deleteCount", userSession, deleteCount);
router.delete("/deleteCount", destroyUser);

module.exports = router;

