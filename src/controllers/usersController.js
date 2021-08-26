const {users, writeUsersJSON} = require('../data/db');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')

module.exports = {
    login:(req,res) => { 
        res.render("general/login", {title: "Login"})
    },
    register:(req,res) => { 
        res.render("general/register", {title: "Registro"})
    },
    registerProcess :(req,res) =>{
        let errors = validationResult(req);
      
        if(errors.isEmpty()){
            let lastId = 0;

            users.forEach(user =>{
                if(user.id > lastId){
                    lastId = user.id
                }
                
            });
            
            let {
                email,
                fullname,
                password
            } = req.body

            let newUser = {
                id: lastId +1,
                email,
                fullname,
                password: bcrypt.hashSync(password, 10),
                rol: "ROL-USER",
                image:  req.file ? '/UsersJson/' + req.file.filename : "default-img.jpg"
            };

            users.push(newUser);
            writeUsersJSON(users);
            res.redirect('/users/login');
        
        } else {

            res.render('general/register',{
                error: errors.mapped(),
                old: req.body,
                title: "registro"
            })
        }

    }
};