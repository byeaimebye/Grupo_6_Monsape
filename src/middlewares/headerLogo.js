module.exports = (req, res, next) =>{
    res.locals.logo = 0;
    next()
}