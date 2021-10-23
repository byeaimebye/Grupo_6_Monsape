const {check, body} = require("express-validator");
const db = require("../database/models");

let validations = [
    check('fullname')
        .notEmpty()
        .withMessage("Debes ingresar un nombre y un apellido"),

    check('fullname')
        .custom(value => {
            let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;
            
            return regExAlpha.test(value);

        })
        .withMessage("Tipo de dato inválido"),

    check('email')
        .isEmail()
        .withMessage('Debes ingresar un email'),

    check("pass")
        .notEmpty()
        .withMessage("Debes rellenar este campo")
        .isLength({
            min: 6,
            max: 12
        })
        .withMessage("La contraseña debe contener entre 6 y 12 caracteres"),

    body("rePass").custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage("Las contraseñas no coinciden"),

    check("dni").optional({nullable: true, checkFalsy: true})
        .notEmpty()
        .withMessage("Debes rellenar este campo")
        .isLength({
            min: 8,
            max: 10
        })
        .withMessage("El valor ingresado no es correcto")
        .isNumeric()
        .withMessage("El dato debe ser de tipo numérico"),
    
    check("tel").optional({nullable: true, checkFalsy: true})
        .notEmpty()
        .withMessage("Debes rellenar este campo")
        .isLength({
            min: 8,
            max: 15
        })
        .withMessage("El valor ingresado no es correcto")
        .isNumeric()
        .withMessage("El dato debe ser de tipo numérico"),
    
    check("cp").optional({nullable: true, checkFalsy: true})
        .notEmpty()
        .withMessage("Debes rellenar este campo")
        .isLength({
            min: 3,
            max: 8
        })
        .withMessage("El valor ingresado no es correcto")
        .isNumeric()
        .withMessage("El dato debe ser de tipo numérico")
];


module.exports = validations;