const Hospital = require('../models/hospital');
const HospVacc = require('../models/hospital_vaccine');
const mongoose = require('mongoose')

// get hospitals listing, to shows on web page
const getAllHospitals = (req, res, next)=>{
    Hospital.find()
    .select('_id name location language')
    .exec()
    .then(docs => {
      const respone = {
        count: docs.length, // how many entries
        hospitals: docs.map(doc => {
          return {
            name: doc.name,
            location: doc.location,
            language: doc.language,
            request: {
              type: "GET",
              url: "/hospitals/" + doc._id,
            }
          }
        })
      }
      res.status(200).json(respone);
    })
    .catch(err=>{
      const err_msg = 'GET hospitals listing error : ' + err.message
      console.log(err_msg);
      res.status(500).json({
        error: err_msg
      });
    });
}

// get a specifiy hopstial by Id
const getHospitalById = (req, res, next)=>{
    const id = req.params.hospitalId;
    Hospital.findById(id)
    .select('_id name location language')
    .exec()
    .then(doc => {
    console.log('from database', doc)
    if (doc){
        res.status(200).json(
        {
            hospital: doc,
            request: {
            type:'GET',
            url: '/hospitals'
            }
        })
        }else {
            res.status(404).json({ message: "No valid entry found for provided hospitalId" })
        }
    })
    .catch(err=>{
        const err_msg = 'GET hospital by Id error : ' + err.message
        console.log(err_msg);
        res.status(500).json({ error: err_msg});
    })
}

// upload a new hospital to database
const postHospital = (req, res, next)=>{
    const hospital = new Hospital({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        location: req.body.location,
        language: req.body.language
    })
    hospital.save()
    .then(result=>{
        console.log('created new hospital : ' + result)
        res.status(201).json({
            message: 'created new hospital successfully',
            new_hospital: result,
            request:{
                type: 'GET',
                url: "/hospitals/" + result._id
            }
        })
    })
    .catch(err=>{
        const err_msg = 'POST create hospital error : ' + err.message
        console.log(err_msg);
        res.status(500).json({ error: err_msg});
    })
}

// update a hospital information by Id, update thing by the request body
const updateHospitalById = (req, res, next)=>{
    const id = req.params.hospitalId
  
    Hospital.updateOne({_id: id}, {$set: req.body})
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Hospital updated',
          upated_ops: req.body,
          request: {
            type: 'GET',
            url: "/hospitals/" + id
          }
        })
      })
      .catch(err=>{
        const error_msg = 'Update Hospital by ID Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
          err_msg: error_msg
        })
      })
}

// delete a hospital by Id
const deleteHospitalById = (req, res, next)=>{
    const id = req.params.hospitalId;
    Hospital.deleteMany({_id: id})
        .exec()
        .then(result=>{
        /* after deleted the hospital from db, those in hosp-vacc relationship should be delete too */
        deleteHospVaccRelationById(id, res)
        })
        .catch(err=>{
        const error_msg = 'Delete Hospital by ID Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
            err_msg: error_msg
        })
    })
}

const deleteHospVaccRelationById = (id, res) =>{
  HospVacc.deleteMany({hospital_id: id})
      .exec()
      .then(result=>{
        res.status(200).json({
          message: 'hospitalId : ' + id + ' in HospVacc relation Deleted',
          request:{
            type: 'GET',
            url : '/hospitals_vaccines'
          }
        })
      })
      .catch(err=>{
        const error_msg = 'Delete hospitalId by ID in HospVacc relation Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
          err_msg: error_msg
        })
      })
}

module.exports = {
    getAllHospitals,
    getHospitalById,
    postHospital,
    updateHospitalById,
    deleteHospitalById
}