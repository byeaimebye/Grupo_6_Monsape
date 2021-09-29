const {vinos} = require("../data/db");
const db = require("../database/models");


module.exports = {
    /* Lista todos los productos disponibles. */
    tienda : (req, res) =>{

        db.Wine.findAll()
            .then(wines => {
                res.render("product/tienda", {
                    title: "Tienda",
                    wines: wines,
                    session: req.session,
                })
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

        db.Wine.findAll({
            include: [{association: "collection"},{association: "variety"}, {association: "category"}]
        })
        .then(wines => {
            /* Recorro el array de resultados obtenidos por la promesa y voy validando si la petición coincide con algun dato,
            ya sea de las categorías, colecciones, variedades y/o el nombre de los vinos. Sabiendo que hay vinos que tienen mas
            de una variedad, valido que dicho atributo tenga contenido (length != 0) y, en caso de que así fuera, recorro las
            variedades en busca de coincidencias con el requerimento. Si el proceso encuentra coincidencias, guarda el elemento
            correspondiente en la variable 'result', y después, al renderizar la vista de resultados, se envían los datos que
            se hayan guardado en la variable. Si la búsqueda no arrojara resultados, se debería tener en cuenta algún mensaje
            que lo indique. */
            let result = [];

            wines.forEach(element => {
                if(element&&element.category.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                    result.push(element)
                }else if(element&&element.collection.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                    result.push(element)
                }else if(element&&element.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                    result.push(element)
                }else if(element.variety.length != 0){
                    element.variety.forEach(variedad => {
                        if(variedad&&variedad.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                            result.push(variedad)
                        }
                    })
                }
            })
            res.render('product/result', {
                title: "resultados",
                wines: result, 
                search: req.query.keywords,
                session: req.session,
            }) 
            
        }).catch(err=>res.send(err))

		/* let result = []
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
		})  */
        
	}
}