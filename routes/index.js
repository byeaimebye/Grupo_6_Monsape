var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '.././views/index.html'));  
});

router.get('/tienda', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/tienda.html'))
})

router.get('/login', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/login.html'))
})

router.get('/register', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/register.html'))
})

router.get('/productDetail', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/productDetail.html'))
})

router.get('/productCart', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/productCart.html'))
})
router.get('/index', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/index.html'))
})
router.get('/home', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/home.html'))
})
router.get('/viewAdmin', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/viewAdmin.html'))
})
router.get('/ingreso', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/ingreso.html'))
})
router.get('/aboutUs', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/aboutUs.html'))
})


module.exports = router;
