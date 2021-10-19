const {vinos, cart, writeCartsJSON} = require("../data/db");
const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    /* Lista todos los productos disponibles. */
    tienda : (req, res) =>{

        db.Wine.findAll({
            include: [
               {association: "category"},
               {association: "collection"},
               {association: "variety"}
           ] 
       })
       .then(wines =>{
           res.render("product/tienda", {
            title: "Tienda",
            wines: wines,
            session: req.session,
        })
       }).catch(error =>{
           res.send(error)
       }) 
       /*  res.render("product/tienda", {
            title: "Tienda",
            vinos: vinos,
            session: req.session,
        }) */
    },
    /* Trae todos los detalles del producto solicitado. */
    productDetail: (req, res) => {
          db.Wine.findByPk(req.params.id,{
              include: [
                {association: "category"},
                {association: "collection"},
                {association: "variety"}
              ]
          })       
          .then(detail =>{
            let varieties = detail.variety.map(element =>{
                return element.name
            }) //element me va a traer el nombre de la variedad que tiene el vino. con la funcion map

            res.render("product/productDetail", {
             varieties: varieties.join(", "),
             title: detail.name,
             detail: detail,
             session: req.session,
         })
        }) 
        /* let param = +req.params.id;
        let detail = vinos.find(product => product.id === param);
        console.log(detail);
        res.render("product/productDetail", {
            title: "Detalle de producto",
            detalle : detail,
            session: req.session,
        }); */
    },
    /* Trae los datos necesarios para el carrito de compras. */
    productCart : (req, res) =>{

        res.render("product/productCart", {title: "Carrito de compras", session: req.session, cart});
    },
    addToCart: (req, res)=>{
        db.Wine.findByPk(+req.params.id)
            .then(wine => {
                let add = {name: wine.name, price: wine.price, quantity: req.body.cantidad, image: wine.image};
                cart.push(add);
                writeCartsJSON(cart);
                res.redirect("/products/tienda");
            })

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
