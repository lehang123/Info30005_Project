const Patient = require('../models/patient');
const mongoose = require('mongoose');
/* bcrypt to protect users' password, 
  this is an async library */
const bcrypt = require('bcrypt');

/* get all the user listing on databse*/
const getUsers = (req, res, next)=>{
  Patient.find()
  .select('_id username account_id')
  .exec()
  .then(docs => {
    const respone = {
        count: docs.length, // how many entries
        patients: docs.map(doc => {
        return {
            id: doc._id,
            username: doc.username,
            account_id: doc.account_id,
          }
        })
      }
      res.status(200).json(respone);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
        error:err
      });
  });
}

/* signup the user to server */
const signupUser = async (req, res, next)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
    
        /* create instance Patient from post request's body (Note: only JSON recongized)*/
        const patient = new Patient({
          _id: new mongoose.Types.ObjectId(),
          account_id: req.body.account_id,
          password: hashedPassword, 
          username: req.body.username,
          birthday: req.body.birthday,
          gender: req.body.gender,
          contact: req.body.contact,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          emergency_contact_name: req.body.emergency_contact_name,
          emergency_contact_number: req.body.emergency_contact_number,
          allergy: req.body.allergy,
          medicare: req.body.medicare,
          heatlh_detail: req.body.heatlh_detail,
          location: req.body.location,
          vaccine_history: req.body.vaccine_history,
          language: req.body.language
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
}

/* login the user to server */
const loginUser = (req, res, next)=>{
    Patient.findOne({account_id: req.body.account_id}, async (err, result)=>{
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
          console.log('error requesting account_id: ' + err)
        }
      })
}

module.exports = {
    signupUser,
    loginUser,
    getUsers
}