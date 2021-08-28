module.exports = function userSession(req, res, next){
    if(req.session.user){
        next();
    }else{
        res.redirect('/users/login')
    }
}