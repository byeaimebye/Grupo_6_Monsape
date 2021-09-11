module.exports = function adminSession(req, res, next){
    if(req.session.user.rol != "ROL-ADMIN"){
        res.redirect('/users/login')
    }
    next();
}