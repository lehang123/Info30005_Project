var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const usersRouter = require('./users');
const vaccineRouter = require('./vaccines');
const hospitalRouter = require('./hospitals');
const appointmentRouter = require('./appointments');
const hospital_vaccineRouter = require('./hospitals_vaccines');

router.use('/users', usersRouter);
router.use('/vaccines', vaccineRouter);
router.use('/hospitals', hospitalRouter);
router.use('/appointments', appointmentRouter);
router.use('/hospitals_vaccines', hospital_vaccineRouter);

module.exports = router;
