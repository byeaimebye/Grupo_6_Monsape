const { check, body } = require('express-validator');
const {users} = require("../data/db");
const bcrypt = require('bcryptjs')
const db = require('../database/models')


let validations =[
    body("email").custom((value,  {req}) => {
        return db.User.findOne({ where: { email: value } })
          .then((user) => {
            if (!user || !bcrypt.compareSync(req.body.password, user.password)){
              return Promise.reject()
            }
    
            if(user.active === 0){
              return Promise.reject()
            }
          })
          .catch(() => {
            return Promise.reject("Credenciales invalidas!");
          });
      })

]

module.exports = validations;