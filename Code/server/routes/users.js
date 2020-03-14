const express = require('express');
const Patient = require('../dbConnection/patient');
const mongoose = require('mongoose');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1, username: "Tonny"},
    {id:2, username: "Jimmy"},
    {id:3, username: "Fanny"}
  ])
});

/* respone to signup post request. */
router.post('/signup', function(req, res, next) {

  /* create instance from post request's body */
  const patient = new Patient({
    _id: new mongoose.Types.ObjectId(),
    account_name: req.body.username,
    password: req.body.password, 
    name: req.body.name,  
  });

  // save paitent object to db
  patient.save().then(result => {
    console.log(result);
  }).catch(err=>console.log(err));

  res.status(201).json({
      message: 'Handling POST request to /signin'

  })
})

module.exports = router;
