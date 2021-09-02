const {vinos} = require("../data/db");


module.exports = {
    /* Lista todos los productos disponibles. */
    tienda : (req, res) =>{
        res.render("product/tienda", {
            title: "Tienda",
            vinos: vinos,
            session: req.session,
        })
    },
    /* Trae todos los detalles del producto solicitado. */
    productDetail: (req, res) => {
        let param = +req.params.id;

        let detail = vinos.find(product => product.id === param);
        console.log(detail);
        res.render("product/productDetail", {
            title: "Detalle de producto",
            detalle : detail,
            session: req.session,
        });
    },
    /* Trae los datos necesarios para el carrito de compras. */
    productCart : (req, res) =>{

        let cargaDeProducto = [];

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
			}else if(vino.variedad.toLowerCase().includes(req.query.keywords.toLowerCase())){
				result.push(vino) 
			}else if(vino.coleccion.toLowerCase().includes(req.query.keywords.toLowerCase())){
				result.push(vino) 
			}else if(vino.categoria.toLowerCase().includes(req.query.keywords.toLowerCase())){
				result.push(vino) 
			}else if(result.length === 0){
                result.push(vinos);
            }
		});
	
	 	res.render('product/result', {
			title: "resultados",
            result, 
			search: req.query.keywords,
            session: req.session,
		}) 
        
	},
    categorias: (req, res) =>{
      
        let vinosPorCategoria = vinos.filter( vino => vino.categoria === req.params.categoria)
       if(vinosPorCategoria){
           res.render( "product/result" , { title: "Monsape", vinos: VinosPorcategoria})
       }else{
            res.render("error")
        }
    }
}