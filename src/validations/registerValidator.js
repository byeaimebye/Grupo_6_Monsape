const { check, body } = require('express-validator');
const {users} = require("../data/db");
const db = require("../database/models");

let validations =[
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email'),

    body('email').custom(value => {
        /* let user = users.filter(user =>{
            return user.email == value
        }) */
        return db.User.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este email ya está registrado')
            }
        })
    }),

    check('fullname')
    .notEmpty()
    .withMessage("Debes ingresar un nombre y apellido"),

    check('password')
    .notEmpty()
    .withMessage('Debes ingresar una contraseña')
    .isLength({
        min: 6,
        max: 15
    })
    .withMessage('La contraseña debe tener entre 6 y 15 caracteres'),

    body('password2').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')

]

module.exports = validations;