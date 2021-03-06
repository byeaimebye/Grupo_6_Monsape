var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let methodOverride = require('method-override');
let session = require('express-session');
let headerLogo = require('./middlewares/headerLogo')

var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/users');
const products = require("./routes/productRouter");
const adminRouter = require("./routes/adminRouter");
const apiRouter = require("./routes/apiRoutes");
const cors = require("cors");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));// Define la ubicación de la carpeta de las Vistas
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: "mySecret",
  resave: false,
  saveUninitialized: true
}));
app.use(headerLogo)
app.use('/', indexRouter); 
app.use('/users', usersRouter);
app.use("/products", products);
app.use("/admin", adminRouter);
app.use("/api/", apiRouter);
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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
