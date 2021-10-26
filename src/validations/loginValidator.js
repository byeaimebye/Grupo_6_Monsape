const { check, body } = require('express-validator');
const {users} = require("../data/db");
const bcrypt = require('bcryptjs')
const db = require('../database/models')


let validations =[
    body("email").custom((value,  {req}) => {
        return db.User.findOne({ where: { email: value } })
          .then((user) => {
          if(!user){
            return Promise.reject("El usuario no existe")
          }
          }),
      body("password").custom((value, {req}) =>{
        return db.User.findOne({ where : { email:value }})
        .then((user) =>{ 
        if (!user || !bcrypt.compareSync(req.body.password, user.password)){
           Promise.reject("La contraseña que ingresaste no es correcta")
         } })
      })
          .catch(() => {
            return Promise.reject("Credenciales invalidas!");
          });  
      })

]

module.exports = validations;