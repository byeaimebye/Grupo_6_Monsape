const {vinos} = require("../data/db");
const {admin, charge} = require("../data/db");

module.exports  = {
    admin: (req, res) => {
        res.render("admin/admin", {
            title: "vista admin"
        });
    },
    products: (req, res)=> {
        res.render("admin/adminProducts", {
            vinos,
            title: "vista admin"
        })
    },
    charge: (req, res) =>{
        res.render("admin/chargeProduct", {title: "Carga de productos"})
    }   
};
