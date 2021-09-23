module.exports = function adminSession(req, res, next){
    if(req.session && req.session.rol != "ROL-ADMIN"){
        res.redirect('/users/login')
    }
    next()
}