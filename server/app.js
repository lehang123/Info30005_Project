require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var pug = require('pug');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// server url

// db
var mongoose = require("mongoose")
var mongooseUrl = process.env.DATABASE_SECRECT_URL

var apiRouter = require('./routes/api');

var app = express();

// connect to db : mongoDB ATLAS Cloud
mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.catch(error=>{console.log('initial connection db error: message' + error)});

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('../client/build'))
}else {
  app.set('view engine', 'pug')
}

// List of all the files that should be served as-is
let protected = ['transformed.js', 'main.css', 'favicon.ico']


app.use('/api', apiRouter);

app.get("*", (req, res) => {

  let path = req.params['0'].substring(1)

  if (protected.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/build/index.html`);
  }
});



// app.use(express.static(path.join(__dirname, 'public')));

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