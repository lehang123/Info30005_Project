var createError = require('http-errors');
var express = require('express');
var pug = require('pug');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// server url
var url = "http://localhost:5000"

// db
var mongoose = require("mongoose")
var mongooseUrl =  "mongodb+srv://lehang:ap7NCXjKcPzLt3Ap@cluster0-xmtxf.mongodb.net/test?retryWrites=true&w=majority"

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vaccineRouter = require('./routes/vaccines');
var hospitalRouter = require('./routes/hospitals');
var appointmentRouter = require('./routes/appointments');
var hospital_vaccineRouter = require('./routes/hospitals_vaccines');

var app = express();

// connect to db : mongoDB ATLAS Cloud
mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.catch(error=>{console.log('initial connection db error: message' + error)});

// view engine setup
app.set('view engine', 'pug')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vaccines', vaccineRouter)
app.use('/hospitals', hospitalRouter);
app.use('/appointments', appointmentRouter);
app.use('/hospitals_vaccines', hospital_vaccineRouter);

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
exports.url = url