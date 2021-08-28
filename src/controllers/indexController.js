
let { vinos } = require('../data/db')


module.exports = {
    index: (req, res) => {

        res.render("general/index", { title: "Bienvenidos a Monsape", session: req.session, });

    },
    home: (req, res) => {
        let vinosDescuento = vinos.filter(vino => vino.descuento >= 15)

        res.render('general/home', {
            vinosDescuento, title: "Monsape Oficial", session: req.session})
    
    },
    aboutUs:(req,res) => { 
        res.render("general/aboutUs", {title: "Sobre Nosotros", session: req.session})
    },
    contact : (req, res)=>{
        res.render("general/contact", {title:"Contactanos", session: req.session});
    },
    politicaDeDevolucion: (req, res) =>{
        res.render("general/politicaDeDevolucion",{title:"Politicas de Devolucion", session: req.session})
    },
    
}

