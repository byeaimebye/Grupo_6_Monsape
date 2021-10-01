const { vinos, writeVinosJSON, users, writeUsersJSON } = require("../data/db");
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {

    products: (req, res) => {
        db.Wine.findAll({
            include: [
                { association: "category" },
                { association: "collection" },
                { association: "variety" }]
        }).then((wines) => {
            res.render("admin/adminProducts", {
                title: "vista admin Products",
                wines: wines
            });
        }).catch((error) => res.send(error))
    },

    charge: (req, res) => {
        let collectionPromise = db.Collection.findAll()
        let categoryPromise = db.Category.findAll()
        let varietyPromise = db.Variety.findAll()


        Promise.all([collectionPromise, categoryPromise, varietyPromise])
            .then(([collectionPromise, categoryPromise, varietyPromise]) => {
                res.render('admin/chargeProduct', {
                    title: "Carga de producto",
                    collection: collectionPromise,
                    category: categoryPromise,
                    variety: varietyPromise,
                    session: req.session
                })
            }).catch((error) => res.send(error))


    },
    //--------------------Administración de Productos-----------------------
    productCreate: (req, res) => {
        let { name,
            description,
            category,
            collection,
            variety,
            stock,
            pairing,
            alcoholContent,
            totalAcidity,
            residualSugar,
            service_temperature,
            price,
            discount,
        } = req.body;


        db.Wine.create({
            name,
            description,
            category_id: category,
            collection_id: collection,
            stock,
            pairing,
            alcoholContent,
            totalAcidity,
            residualSugar,
            service_temperature,
            price,
            discount,
            image: req.file ? '/VinosJson/' + req.file.filename : "default-img.jpg"
        })
            .then(result => {
                variety.forEach(element => {
                    db.WineVariety.create({
                        wine_id: result.id,
                        variety_id: element
                    })
                })
                res.redirect('/admin/products')
            }).catch((error) => { res.send(error) })


        /*   let lastId = 1;
          vinos.forEach(vino => {
              if(vino.id > lastId){
                  lastId = vino.id
              }
          });
          let { nombre, 
              descripcion, 
              variedad,
              categoria,
              coleccion,
              stock, 
              Maridaje,
              graduacionAlcoholica,
              acidezTotal,
              azucarResidual,
              temperaturaRecomendada,
              precio,
              descuento } = req.body;
      	
          let nuevoProducto = {
              id: lastId + 1,
                  nombre, 
                  descripcion, 
                  variedad,
                  categoria,
                  coleccion,
                  stock, 
                  Maridaje,
                  graduacionAlcoholica,
                  acidezTotal,
                  azucarResidual,
                  temperaturaRecomendada,
                  precio,
                  descuento,
                  image:  req.file ? '/VinosJson/' + req.file.filename : "default-img.jpg"
          };
  
         
  
          vinos.push(nuevoProducto);
  
          writeVinosJSON(vinos); 
  
           res.redirect('/admin/products')   */
    },
    edit: (req, res) => {
        
        let contador = 0;
        let wineEditPromise = db.Wine.findByPk(req.params.id, {include: [
            { association: "category" },
            { association: "collection" },
            { association: "variety" }]});
        let collectionPromise = db.Collection.findAll();
        let categoryPromise = db.Category.findAll();
        let varietyPromise = db.Variety.findAll();
       /*  let wineVarietiesPromise = db.WineVariety.findAll({
            where: {
                wine_id: req.params.id
            }
        }); */


        Promise.all([wineEditPromise, collectionPromise, categoryPromise, varietyPromise /* wineVarietiesPromise */])
            .then(([wineEditPromise, collectionPromise, categoryPromise, varietyPromise /* wineVarietiesPromise */]) => {
                /* res.send(wineVarietiesPromise);  */
                res.send(wineEditPromise)
             /*    res.render('admin/editProduct', {
                    title: "Edición de producto",
                    wine: wineEditPromise,
                    collection: collectionPromise,
                    category: categoryPromise,
                    variety: varietyPromise,
                    wineVariety: wineVarietiesPromise, 
                    contador,
                    session: req.session
                }) */
            }).catch((error) => res.send(error))
    },

    productEdit: (req, res) => {

        let { name,
            description,
            category,
            collection,
            variety,
            stock,
            pairing,
            alcoholContent,
            totalAcidity,
            residualSugar,
            service_temperature,
            price,
            discount,
        } = req.body;


        db.Wine.update({
            name,
            description,
            category_id: category,
            collection_id: collection,
            stock,
            pairing,
            alcoholContent,
            totalAcidity,
            residualSugar,
            service_temperature,
            price,
            discount,
            image: req.file ? '/VinosJson/' + req.file.filename : "default-img.jpg"
        },
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(result => {
                db.WineVariety.destroy({
                    where: {
                        wine_id: req.params.id
                    }
                })

                variety.forEach(element => {
                    db.WineVariety.create({
                        wine_id: result.id,
                        variety_id: element
                    })
                })
                res.redirect('/admin/products')
            }).catch((error) => { res.send(error) })


        /*  let {
             nombre, 
             descripcion, 
             variedad,
             categoria,
             coleccion,
             stock, 
             Maridaje,
             graduacionAlcoholica,
             acidezTotal,
             azucarResidual,
             temperaturaRecomendada,
             precio,
             descuento 
         } = req.body;
 
         vinos.forEach(vino =>{
             if(vino.id === +req.params.id){
             vino.id = vino.id,
             vino.nombre = nombre,
             vino.descripcion = descripcion,
             vino.variedad = variedad,
             vino.categoria = categoria,
             vino.coleccion = coleccion,
             vino.stock = stock,
             vino.Maridaje = Maridaje,
             vino.graduacionAlcoholica = graduacionAlcoholica,
             vino.acidezTotal = acidezTotal,
             vino.azucarResidual = azucarResidual,
             vino.temperaturaRecomendada = temperaturaRecomendada,
             vino.precio = precio,
             vino.descuento = descuento,
             vino.image = req.file ? '/VinosJson/' + req.file.filename : vino.image 
             }
         })
         
         writeVinosJSON(vinos);
         res.redirect("/admin/products") */
    },
    productDelete: (req, res) => {
        vinos.forEach(vino => {
            if (vino.id === +req.params.id) {
                let vinoToDelete = vinos.indexOf(vino);
                vinos.splice(vinoToDelete, 1)
            }
        })

        writeVinosJSON(vinos);
        res.redirect("/admin/products")

    },
    usersTable: (req, res) => {
        res.render("admin/adminUsers", {
            users,
            title: "Tabla de Usuarios Registrados"
        })
    }
};
