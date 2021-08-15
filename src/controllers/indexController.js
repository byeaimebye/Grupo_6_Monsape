
let { vinos } = require('../data/db')



module.exports = {
    index : (req, res)=>{
        
        res.render("general/index", {title: "Bienvenidos a Monsape"});
        
},
home:(req,res) => { 
  let vinosDescuento = vinos.filter(vino => vino.descuento >= 15)

        res.render('general/home', {
            vinosDescuento, title: "Monsape Oficial"})
    
},
aboutUs:(req,res) => { 
    res.render("general/aboutUs", {title: "Sobre Nosotros"})
}
}