const {vinos} = require("../data/db");


module.exports = {
    /* Lista todos los productos disponibles. */
    tienda : (req, res) =>{
        res.render("product/tienda", {
            title: "Tienda",
            vinos: vinos
        })
    },
    /* Trae todos los detalles del producto solicitado. */
    productDetail: (req, res) => {
        let param = +req.params.id;

        let detail = vinos.find(product => product.id === param);
        console.log(detail);
        res.render("product/productDetail", {
            title: "Detalle de producto",
            detalle : detail
        });
    },
    /* Trae los datos necesarios para el carrito de compras. */
    productCart : (req, res) =>{
        res.render("product/productCart", {title: "Carrito de compras"});
    },
    filtrar: (req, res) => {
        let param = req.body.categoria;

        let filtro = vinos.filter(element => element.categoria === param);
        /* Aca deberia filtrarse los vinos por categorias. Tambien podemos hacer un filtrado por coleccion. */
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
      
        let categoria = vinos.filter( vino => vino.categoria === req.params.categoria)
       if(categoria){
           res.render( "product/tienda" , { title: "Monsape", vinos: categoria})
       }else{
            res.render("error")
        }
    }
}