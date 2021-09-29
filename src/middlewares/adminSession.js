module.exports = function adminSession(req, res, next){
    if(req.session.user && req.session.user.rol === "ROL-ADMIN"){
        next();
    }else{
        res.redirect('/home')
    }
    
}