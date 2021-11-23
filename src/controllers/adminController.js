const { vinos, writeVinosJSON, users, writeUsersJSON } = require("../data/db");
const { validationResult } = require('express-validator');
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
                wines: wines,
                session: req.session,
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
        let errors = validationResult(req);
        let newWine = [];
        /* res.send(errors); */

        if (errors.isEmpty()) {
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


            let createWine = db.Wine.create({
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
            }).then(result => {
                let create = "";

                if (variety && Array.isArray(variety)) {
                    create = variety.forEach(element => {
                        db.WineVariety.create({
                            wine_id: result.id,
                            variety_id: +element
                        }).then(() => { })
                    });

                } else if (variety && !Array.isArray(variety)) {
                    create = db.WineVariety.create({
                        wine_id: result.id,
                        variety_id: variety
                    }).then(() => { })
                }

                /* res.send(newWine) */
                res.redirect('/admin/products')
            }).catch((error) => { res.send(error) })
        } else {

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
                        session: req.session,
                        errors: errors.mapped(),
                        old: req.body,
                    })
                }).catch((error) => res.send(error))
        }



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


        let wineEditPromise = db.Wine.findByPk(req.params.id, {
            include: [
                { association: "category" },
                { association: "collection" },
                { association: "variety" }]
        });
        let collectionPromise = db.Collection.findAll();
        let categoryPromise = db.Category.findAll();
        let varietyPromise = db.Variety.findAll();


        Promise.all([wineEditPromise, collectionPromise, categoryPromise, varietyPromise])
            .then(([wineEditPromise, collectionPromise, categoryPromise, varietyPromise]) => {
                /* res.send(wineEditPromise); */
                let productVariety = [];
                let wineVariety = [];
                wineEditPromise.variety.forEach(v => {
                    productVariety.push({ id: v.id, name: v.name, status: "checked" })
                })

                varietyPromise.forEach(v2 => {
                    wineVariety.push({ id: v2.id, name: v2.name, status: "" })
                })

                productVariety.forEach(element => {
                    wineVariety.forEach(element2 => {
                        if (element.id === element2.id) {
                            wineVariety.splice(wineVariety.indexOf(element2), 1, element);
                        }
                    })
                })
                // res.send(wineEditPromise);
                let imagen = wineEditPromise.image;
                let inputValue= imagen.replace("/VinosJson/",""); 


                res.render('admin/editProduct', {
                    title: "Edición de producto",
                    wine: wineEditPromise,
                    collection: collectionPromise,
                    category: categoryPromise,
                    variety: varietyPromise,
                    wineVariety,
                    session: req.session,
                    inputValue
                })
            }).catch((error) => res.send(error))
    },

    productEdit: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
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
            /* res.send() */
            

            let wine = db.Wine.findByPk(req.params.id)

            let update = db.Wine.update({
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
                image: req.file ? '/VinosJson/' + req.file.filename : wine.image
            },
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
                       

            let destroy = db.WineVariety.destroy({
                where: {
                    wine_id: req.params.id
                }
            }).then(() => { })

            let create = "";

            if (variety && Array.isArray(variety)) {
                create = variety.forEach(element => {
                    db.WineVariety.create({
                        wine_id: +req.params.id,
                        variety_id: +element
                    }).then(() => { })
                });

            } else if (variety && !Array.isArray(variety)) {
                create = db.WineVariety.create({
                    wine_id: +req.params.id,
                    variety_id: variety
                }).then(() => { })
            }

            Promise.all([update, destroy, create, wine])
                .then(() => {
                    res.redirect('/admin/products')
                })
                .catch((error) => { res.send(error) })
        } else {
            let wineEditPromise = db.Wine.findByPk(req.params.id, {
                include: [
                    { association: "category" },
                    { association: "collection" },
                    { association: "variety" }]
            });
            let collectionPromise = db.Collection.findAll();
            let categoryPromise = db.Category.findAll();
            let varietyPromise = db.Variety.findAll();


            Promise.all([wineEditPromise, collectionPromise, categoryPromise, varietyPromise])
                .then(([wineEditPromise, collectionPromise, categoryPromise, varietyPromise]) => {
                    /* res.send(wineEditPromise); */
                    let productVariety = [];
                    let wineVariety = [];
                    wineEditPromise.variety.forEach(v => {
                        productVariety.push({ id: v.id, name: v.name, status: "checked" })
                    })

                    varietyPromise.forEach(v2 => {
                        wineVariety.push({ id: v2.id, name: v2.name, status: "" })
                    })

                    productVariety.forEach(element => {
                        wineVariety.forEach(element2 => {
                            if (element.id === element2.id) {
                                wineVariety.splice(wineVariety.indexOf(element2), 1, element);
                            }
                        })
                    })
                    /* res.send(wineVariety); */


                    res.render('admin/editProduct', {
                        title: "Edición de producto",
                        wine: wineEditPromise,
                        collection: collectionPromise,
                        category: categoryPromise,
                        variety: varietyPromise,
                        wineVariety,
                        session: req.session,
                        errors: errors.mapped(),
                        old: req.body,
                    })
                }).catch((error) => res.send(error))
        }
    },
    productDelete: (req, res) => {

        db.Wine.findByPk(req.params.id)
            .then(wine => {
                wine.destroy({
                    where: { id: wine.id }
                }).then(()=>{})
            fs.existsSync("./public/img/VinosJson/", wine.image)
                ? fs.unlinkSync("./public/img/VinosJson/" + wine.image)
                  : console.log("-- No se encontró");

                res.redirect("/admin/products");
            }).catch(err => res.send(err));

        /* vinos.forEach(vino => {
            if (vino.id === +req.params.id) {
                let vinoToDelete = vinos.indexOf(vino);
                vinos.splice(vinoToDelete, 1)
            }
        })

        writeVinosJSON(vinos); */
        res.redirect("/admin/products")

    },
    userDelete: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                db.User.destroy({
                    where: { id: user.id }
                })
                res.redirect("/admin/usersTable")
            })
            .catch((error) => { res.send(error) })
    },
    usersTable: (req, res) => {
        db.User.findAll().then((users) => {
            res.render("admin/adminUsers", {
                users,
                title: "Tabla de Usuarios Registrados",
                session: req.session
            })
        })

    },
    asignAdmin : (req, res)=> {

        db.User.update({
                rol: "ROL_ADMIN"
            }, {
                where: { id: +req.params.id }
            })
            .then(() => {
                res.redirect("" + req.params.id);
            })
            .catch(err => res.send(err));

        
    },
    userToDelete: (req, res) => {
        db.User.findByPk(req.params.id)
            .then((user) => {
                
                res.render("admin/userProfileAdmin", {
                    title: "Edicion de usuario",
                    user,
                    session: req.session
                })
            })
            .catch(error => res.send(error));
    },
    login: (req, res) => {
        res.render("admin/adminLogin", { title: "Login: Modo Administrador", session: req.session });
    },
    processLogin: (req, res) => {

    },
    register: (req, res) => {
        res.render("admin/adminRegister", { title: "Register: Modo Administrador", session: req.session });
    },
    registerProcess: (req, res) => {

    },
    profile: (req, res) => {

    },
    editProfile: (req, res) => {

    },
    destroy: (req, res) => {

    },
}
