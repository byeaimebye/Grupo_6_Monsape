var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/users');
const productDetailRouter = require("./routes/productDetailRouter");
const productCartRouter = require("./routes/productCartRouter");
const contactRouter = require("./routes/contactRouter");
const tiendaRouter = require("./routes/tienda");
const adminRouter = require("./routes/adminRouter");
const politicaDevolucionRoter = require("./routes/politicaDevolucionRouter");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/productDetail", productDetailRouter);
app.use("/productCart", productCartRouter);
app.use("/contact", contactRouter);
app.use("/tienda", tiendaRouter);
app.use("/admin", adminRouter);
app.use("/politicaDeDevolucion", politicaDevolucionRoter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
