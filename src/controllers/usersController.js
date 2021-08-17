module.exports = {
    login:(req,res) => { 
        res.render("general/login", {title: "Login"})
    },
    register:(req,res) => { 
        res.render("general/register", {title: "Registro"})
    }
};