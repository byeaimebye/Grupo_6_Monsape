let db =  require("../data/db")

let controller = {
    admin: (req, res) => {
        res.render("admin/admin", {title: "vista admin"});
    }
};

module.exports = controller;