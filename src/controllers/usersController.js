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
    registerProcess :(req, res) =>{
        let errors = validationResult(req);
        let newId = 0;
        if(errors.isEmpty()){
            
            users.forEach(user =>{
                if(user.id > newId){
                    newId = user.id
                }
                
            });
            newId++;

            delete req.body.password2;
            delete req.body.terms;
            let newUser = {
                id: newId,
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                rol: "ROL-USER",
                image:  req.file ? '/users/' + req.file.filename : "/users/default-img.jpg"
            };

            users.push(newUser);
            writeUsersJSON(users);
            res.redirect('/users/login');
        
        }

            res.render('general/register',{
                errors : errors.mapped(),
                old: req.body,
                title: "registro"
            })

    },
    processLogin : (req, res)=>{
        
        res.send(req.body);
    }
};