
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
},
contact : (req, res)=>{
    res.render("general/contact", {title:"Contactanos"});
},
error: (req, res) =>{
    res.render("general/error", {title: "404 not found"})
},
politicaDeDevolucion: (req, res) =>{
    res.render("general/politicaDeDevolucion",{title:"Politicas de Devolucion"})
},
 tienda : (req, res) => {
  res.render("product/tienda", {
      vinos: vinos,
      title: "Tienda"});
    },
  search: (req, res) => {
		let result = []
		vinos.forEach(vino => {
			if(vino.nombre.toLowerCase().includes(req.query.keywords.toLowerCase())){
				result.push(vino) 
			}
		});
	
	 	res.render('product/result', {
			title: "resultados",
            result, 
			search: req.query.keywords
		}) 
        
	},
    categorias: (req, res) =>{
      
        let categoria = vinos.filter( vino => vino.categoria == req.params.categoria)
        res.render( "product/tienda" , { title: "Monsape", vinos: categoria})
      
        
    }
}

