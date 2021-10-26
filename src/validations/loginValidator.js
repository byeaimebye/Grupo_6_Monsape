const { check, body } = require('express-validator');
const {users} = require("../data/db");
const bcrypt = require('bcryptjs')
const db = require('../database/models')


module.exports = [
  check('email')
  .isEmail()
  .withMessage('Debes ingresar un email válido'),

  body('email').custom(value => {
  
    return db.User.findOne({
        where : {
            email : value
        }
    })
    .then(user => {
        if(!user){
            return Promise.reject('Este email no está registrado')
        }
    })
}),
body('password').custom((value, {req}) => {
return db.User.findOne({where: { email: req.body.email}})
.then((user)=>{
  if (!bcrypt.compareSync(value, user.password)){
    return Promise.reject()
  }
}).catch(() => {
  return Promise.reject("Las contraseñas no coinciden");
});
})
  /* body("email").custom((value,  {req}) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (!user || !bcrypt.compareSync(req.body.password, user.password)){
            return Promise.reject()
          }
        })
        .catch(() => {
          return Promise.reject("Credenciales invalidas!");
        });
    })
 */
]

