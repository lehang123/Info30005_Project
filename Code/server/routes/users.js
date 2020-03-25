const express = require('express');
const Patient = require('../database/patient');
const mongoose = require('mongoose');
const router = express.Router();
/* bcrypt to protect users' password, 
  this is an async library */
const bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/', function(req, res, next) {
 
});

/* respone to signup post request. */
router.post('/signup', async function(req, res, next) {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    /* create instance Patient from post request's body (Note: only JSON recongized)*/
    const patient = new Patient({
      _id: new mongoose.Types.ObjectId(),
      account_name: req.body.username,
      password: hashedPassword, 
      name: req.body.name,  
    });

    // save paitent object to db
    patient.save().then(result => {
      console.log('stored successfully: ' + result);
      res.status(201).json({
        message: 'Handled POST request to /signup',
        createdPatient: patient
      })
    }).catch(err=>{
      console.log(' user create error : ' + err.message)
      // handle for duplicated username
      res.status(500).json({
        message: 'Something went wrong',
        error_msg: err.message
      })
    });
    
  }catch(err){
    res.status(500).send('something went wrong : ' + err.message)
  }
  
})

router.post('/login', (req, res, next)=>{
  // find user with the match username from 
  Patient.findOne({account_name: req.body.username}, async (err, result)=>{
    if (result){
      try{
        if(await bcrypt.compare(req.body.password, result.password)){
          res.send('login success')
        }else{
          res.send('login failed')
        }
      }catch(e){
        res.status(500).send('something wrong : ' + e.message)
      }
    }else{
      console.log('error requesting account_name: ' + err)
      // todo: feedback to client tell them something is wrong
    }
  })
})

module.exports = router;
