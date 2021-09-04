module.exports = function adminSession(req, res, next){
    if(req.session.user.rol.toLowerCase() != "admin"){
        res.redirect('/users/login')
    }
    next();
}