let controller = {
    index : (req, res) => {
        res.render("admin", {title: "vista admin"});
    }
};

module.exports = controller;