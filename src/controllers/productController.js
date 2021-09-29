const {vinos} = require("../data/db");
const db = require('../database/models');
const {Op} = require('sequelize')

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
       .then(vinos =>{
           res.render("product/tienda", {
            title: "Tienda",
            vinos: vinos,
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
             varieties: varieties.join(" , "),
             title: "Tienda",
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

        let cargaDeProducto = [];

        res.render("product/productCart", {title: "Carrito de compras"});
    },
    search: (req, res) => {
        let result = [];
		db.Wine.findAll({ 
            include: [
                {association: "category"},
                {association: "collection"},
                {association: "variety"}
              ]},
              {where: {  category : {[Op.like]: `$%{req.query.search}%`}}}
		).then(wines=>{/* wines => {
                if(wines.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                    result.push(wines) 
                }else if(wines.variety.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                    result.push(wines) 
                }else if(wines.collection.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                    result.push(wines) 
                }else if(wines.category.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                    result.push(wines) 
                }else if(result.length === 0){
                    result.push(wines);
                } */
            
        	res.render('product/result', {
                title: "resultados",
                wines: wines,
                search: req.query.keywords,
                session: req.session,
            })
        })
        }
  
}
