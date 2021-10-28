let { vinos } = require('../data/db')
const db = require('../database/models')
const {Op}= require('sequelize')


module.exports = {
    index: (req, res) => {

        res.render("general/index", { title: "Bienvenidos a Monsape", session: req.session });

    },

    indexProcess: (req, res)=> {
        if(req.body.year <= 2003){
            res.redirect("/home");
        }else {
            res.send("Volá de acá, incordio.");
        }
    },
    home: (req, res) => {
        db.Wine.findAll({
            where: {
                discount: {
                    [Op.gte]: 15
                }
            }
        })
        .then(vinosDescuento => {
            res.render('general/home', {
                wines: vinosDescuento,
                
                title: "Monsape Oficial", 
                session: req.session})
        }).catch(error =>{
            res.send(error)
        }) 

       /*  let vinosDescuento = vinos.filter(vino => vino.descuento >= 15)

        res.render('general/home', {
            vinosDescuento, title: "Monsape Oficial", session: req.session}) */
    
    },
    aboutUs:(req,res) => { 
        res.render("general/aboutUs", {title: "Sobre Nosotros", session: req.session})
    },
    contact : (req, res)=>{
        res.render("general/contact", {title:"Contactanos", session: req.session});
    },
    politicaDeDevolucion: (req, res) =>{
        res.render("general/politicaDeDevolucion", {title:"Politicas de Devolucion", session: req.session})
    },
    
}

