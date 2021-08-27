const {users, writeUsersJSON} = require('../data/db');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')

module.exports = {
    login:(req,res) => { 
        res.render("general/login", {title: "Login", session: req.session})
    },
    register:(req,res) => { 
        res.render("general/register", {title: "Registro", session: req.session} )
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
                title: "registro",
                session: req.session,
            })

    },
    processLogin : (req, res)=>{
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
            req.session.user ={
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                rol: user.rol,
                image: user.image
            }

            if(req.body.remember){
                res.cookie('cookieMonsape', req.session.user, {maxAge: 1000*60})
            }
            res.locals.user = req.session.user
            res.redirect("/home")
        }else{
            res.render('general/login', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body,
                title: 'Ingresá a Monsape'
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.cookieMonsape){
            res.cookie('cookieMonsape', '', {maxAge:-1})
        }
        res.redirect('/home')
    }
};