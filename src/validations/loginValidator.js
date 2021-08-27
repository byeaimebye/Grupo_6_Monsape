const { check, body } = require('express-validator');
const {users} = require("../data/db");
const bcrypt = require('bcryptjs')

let validations =[
    check('email')
    .isEmail()
    .withMessage('Debes ingresar tu email'),

    body('email').custom(value => {
        let user = users.find(user => user.email == value)
        if(user !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage('El email es incorrecto'),

    check('password')
    .notEmpty()
    .withMessage('Debes ingresar tu contraseña'),
    
    body('password')
    .custom((value, {req}) =>{
            let user = users.find(user => user.email === req.body.email)
            return bcrypt.compareSync(value, user.password)
        })
   .withMessage('La contraseña no coincide con el usuario')

]

module.exports = validations;