const {vinos, cart, writeCartsJSON} = require("../data/db");
const db = require('../database/models');
const {Op} = require('sequelize');
const fetch = require("node-fetch")

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
    productDetail: /* async */ (req, res) => {
          db.Wine.findByPk(req.params.id,{
              include: [
                {association: "category"},
                {association: "collection"},
                {association: "variety"}
              ]
          })  
          /* await fetch("http://localhost:3080/api/hola/"+req.params.id)
          .then(response => {return response.json()})  */    
          .then(detail =>{/* 
              res.send(detail) */
            let varieties = detail./* data. */variety.map(element =>{
                return element.name
            }) //element me va a traer el nombre de la variedad que tiene el vino. con la funcion map

            res.render("product/productDetail", {
             varieties: varieties.join(", "),
             title: detail./* data. */name,
             detail: detail/* .data */,
             session: req.session,
             id: +req.params.id
         })
        }).catch(err=> res.send(err));
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
        res.render("product/productCart", {title: "Carrito de compras", session:req.session});
    },
    search: (req, res) => {

        db.Wine.findAll({
            include: [
                {association: "category"},
                {association: "collection"},
                {association: "variety"}
              ]
        }
        )
        .then(wines => {

           let result = [];
           
           wines.filter(element => {
               
            switch(true){
                case element.name.toLowerCase().includes(req.query.keywords.toLowerCase()):
                    result.push(element);
                case element.category.name.toLowerCase().includes(req.query.keywords.toLowerCase()):
                    result.push(element);
                case element.collection.name.toLowerCase().includes(req.query.keywords.toLowerCase()):
                    result.push(element);
                case Array.isArray(element.variety):
                    element.variety.filter(variety => {
                        if(variety.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                            result.push(element);
                        }
                    })
                default:
                    break;

            }
            })

            const resultados = result.reduce((acc,item)=>{
                if(!acc.includes(item)){
                    acc.push(item);
                }
                return acc;
              },[])

            //res.send(resultados)

            res.render('product/result', {
                title: "resultados",
                wines: resultados, 
                search: req.query.keywords,
                session: req.session,
            }) 
        })
        
	}
}
