const {check, body} = require("express-validator");
const db = require("../database/models");

let validations = [
    check('name')
        .notEmpty()
        .withMessage("El campo nombre está vacío.")
        .isLength({
            min: 5,
        })
        .withMessage("El campo nombre debe contener al menos 5 caracteres."),
    
    check('description')
        .notEmpty()
        .withMessage("El campo descripción está vacío.")
        .isLength({
            min: 20,
        })
        .withMessage("El campo descripción debe contener al menos 20 caracteres."),   

    check('category')
        .notEmpty()
        .withMessage("Debés seleccionar una categoria"),

    check('collection')
        .notEmpty()
        .withMessage("Debés seleccionar una colección"),
        
    check('stock')
        .notEmpty()
        .withMessage("El campo stock está vacío.")
        .custom(value => {
            let regExNum = /^[0-9]{1,8}$/;
            
            return regExNum.test(value);

        })
        .withMessage("Tipo de dato inválido"),
    
    check('pairing')
        .notEmpty()
        .withMessage("El campo Maridaje está vacío.")
        .isLength({
            min: 20,
        })
        .withMessage("El campo maridaje debe contener al menos 20 caracteres."),    

    check('alcoholContent')
        .notEmpty()
        .withMessage("El campo está vacío.")
        .isLength({
            max: 5,
        })
        .withMessage("El campo NO debe contener más de 5 caracteres.")
        .custom(value => {
            let regExDecimal = /^[0-9]{1,2}([,][0-9]{1,2})?$/;
            
            return regExDecimal.test(value);

        })
        .withMessage("Tipo de dato inválido"),

    check('totalAcidity')
        .notEmpty()
        .withMessage("El campo está vacío.")
        .isLength({
            max: 5,
        })
        .withMessage("El campo NO debe contener más de 5 caracteres.")
        .custom(value => {
            let regExDecimal = /^[0-9]{1,2}([,][0-9]{1,2})?$/;
            
            return regExDecimal.test(value);

        })
        .withMessage("Tipo de dato inválido"),

    check('residualSugar')
        .notEmpty()
        .withMessage("El campo azúcar residual está vacío.")
        .isLength({
            max: 5,
        })
        .withMessage("El campo NO debe contener más de 5 caracteres.")
        .custom(value => {
            let regExDecimal = /^[0-9]{1,2}([,][0-9]{1,2})?$/;
            
            return regExDecimal.test(value);

        })
        .withMessage("Tipo de dato inválido"),

    check('service_temperature')
        .notEmpty()
        .withMessage("El campo temperatura recomendada está vacío."),

    check('price')
        .notEmpty()
        .withMessage("El campo precio está vacío.")
        .isLength({
            max: 9,
        })
        .withMessage("El campo NO debe contener más de 9 caracteres.")
        .custom(value => {
            let regExPrice = /^[0-9]{1,6}([,][0-9]{1,2})?$/;
            
            return regExPrice.test(value);

        })
        .withMessage("Tipo de dato inválido"), 

    check('discount')
        .notEmpty()
        .withMessage("El campo descuento está vacío.")
        .isLength({
            max: 3,
        })
        .withMessage("El campo NO debe contener más de 3 caracteres.")
        .custom(value => {
            let regExNum = /^[0-9]{1,8}$/;
            
            return regExNum.test(value);

        })
        .withMessage("Tipo de dato inválido"),       
          
   
];


module.exports = validations;