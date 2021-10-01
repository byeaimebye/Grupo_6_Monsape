const { users, writeUsersJSON } = require('../data/db');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = {
    login: (req, res) => {
        res.render("general/login", { title: "Login", session: req.session })
    },
    register: (req, res) => {
        res.render("general/register", { title: "Registro", session: req.session })
    },
    registerProcess: (req, res) => {
        let errors = validationResult(req);
        /* let newId = 0; */
        if (errors.isEmpty()) {

            /* users.forEach(user =>{
                if(user.id > newId){
                    newId = user.id
                }
            });
            newId++; */
            let {
                email,
                fullname,
                password
            } = req.body;


            db.User.create({
                fullname,
                email,
                date: Date.now(),
                password: bcrypt.hashSync(password, 10),
                rol: "ROL-USER",
                avatar: req.file ? '/users/' + req.file.filename : "/users/default-avatar.jpg"
            })
                .then(user => {
                    if (user) {
                        res.redirect("/users/login");
                    }
                })
        } else {

            res.render('general/register', {
                errors: errors.mapped(),
                old: req.body,
                title: "Registro",
                session: req.session,
            })
        }

        /* delete req.body.password2;
        delete req.body.terms;
        let newUser = {
            id: newId,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
        };

        users.push(newUser);
        writeUsersJSON(users);
        res.redirect('/users/login');
    
    } */


    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email);

            req.session.user = {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                rol: user.rol,
                image: user.image
            }

            if (req.body.remember) {
                res.cookie('cookieMonsape', req.session.user, { maxAge: (10000 * 60) * 60 })
            }
            res.locals.user = req.session.user
            res.redirect("/home")
        } else {
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
        if (req.cookies.cookieMonsape) {
            res.cookie('cookieMonsape', '', { maxAge: -1 })
        }
        res.redirect('/home')
    },
    profile: (req, res) => {
        let user = users.find(user => user.email === req.session.user.email);

        res.render("general/profile", { title: "Perfil", user });
    },
    editProfile: (req, res) => {
        let {
            fullname,
            email,
            password,
            dni,
            tel,
            cp,
            date
        } = req.body
        users.forEach(element => {
            if (element.email === email) {

                element.id = element.id,
                    element.image = req.file ? 'users/' + req.file.filename : "users/default-avatar.jpg",
                    element.fullname = fullname ? fullname : element.fullname,
                    element.email = email ? email : element.email,
                    element.password = password ? bcrypt.hashSync(password, 10) : element.password,
                    element.dni = dni ? dni : element.dni,
                    element.tel = tel ? tel : element.tel,
                    element.cp = cp ? cp : element.cp,
                    element.date = date ? date : element.date
            }

        })
        writeUsersJSON(users);
        res.redirect("/users/profile");
    }
};