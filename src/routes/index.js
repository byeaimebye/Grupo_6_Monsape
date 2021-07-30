var express = require('express');
var router = express.Router();
var path = require('path');
const productDetailRouter = require("./productDetailRouter");
const productCartRouter = require("./productCartRouter");
const indexRouter = require("./indexRouter");

/* Rutas EJS */
router.get("/productDetail", productDetailRouter);
router.get("/productCart", productCartRouter);
router.get("/", indexRouter);

/* GET home page. */

router.get('/tienda', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/tienda.html'))
})

router.get('/login', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/login.html'))
})

router.get('/register', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/register.html'))
})
router.get('/home', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/home.html'))
})
router.get('/viewAdmin', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/viewAdmin.html'))
})

module.exports = router;
