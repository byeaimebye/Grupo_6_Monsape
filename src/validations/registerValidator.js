const { check, body } = require('express-validator');
const {users} = require("../data/db");

module.exports =[
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email'),

    body('email').custom(value => {
        let user = users.filter(user =>{
            return user.email == value
        })
        if(user == false){
            return true
        }else{
            return false
        }
    })
    .withMessage('Este email ya fue registrado'),

    check('fullname')
    .notEmpty()
    .withMessage("Debes ingresar un nombre y apellido"),

    check('password')
    .notEmpty()
    .withMessage('Debes ingresar una contraseña')
    .isLength({
        min: 8,
        max: 15
    })
    .withMessage('La contraseña debe tener entre 8 y 15 caracteres'),

    body('password2').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')

]