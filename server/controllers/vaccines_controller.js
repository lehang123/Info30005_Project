const Vaccine = require('../models/vaccine')
const HospVacc = require('../models/hospital_vaccine');
const mongoose = require('mongoose')

/* get vaccine listing to show on the vaccine page */
const getAllVaccines = (req, res, next)=>{
  Vaccine.find()
  .select('_id name alleries prevent_disease good_for_groups recommend_star cost image_url')
  .exec()
  .then(docs => {
    const respone = {
        count: docs.length, // how many entries
        vaccines: docs.map(doc => {
        return {
            id: doc._id,
            name: doc.name,
            prevent_disease: doc.prevent_disease,
            alleries: doc.alleries,
            good_for_groups: doc.good_for_groups,
            recommend_star: doc.recommend_star,
            cost: doc.cost,
            image_url: doc.image_url,
            request: {
                type: "GET",
                url: "/vaccines/" + doc._id,
            }
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

/* get a specific vaccine by id from the server */
const getVaccineById = (req, res, next)=>{
    const id = req.params.vaccineId;
    Vaccine.findById(id)
      .select('_id name cost alleries prevent_disease good_for_groups recommend_star manufacturer image_url')
      .exec()
      .then(doc => {
        console.log('from database', doc)
        if (doc){
          res.status(200).json(doc)
        }else {
          res.status(404).json({ message: "No valid entry found for provided vaccineId" })
        }
      })
      .catch(err=>{
        console.log(err.message);
        res.status(500).json({ error: err.message });
      })
}

/* post a new vaccine to database */
const postVaccine = (req, res, next) =>{
    const vaccine = new Vaccine({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        cost: req.body.cost,
        alleries: req.body.alleries,
        prevent_disease: req.body.prevent_disease,
        good_for_groups: req.body.good_for_groups,
        recommend_star: req.body.recommend_star,
        manufacturer: req.body.manufacturer,
        image_url: req.body.image_url
    });
    vaccine.save()
    .then(result =>{
        console.log(result)
        res.status(201).json({
            message: "Created product successfully",
            createdVaccine: result,
            request:{
            type:"GET",
            url: "/vaccines/" + result._id
            }
        })
        })
    .catch(err=>{
        console.log(err.message);
        res.status(500).json({
        error: err.message
        })
    })
}

/* update a vaccine by request body */
const updateVaccineById = (req, res, next) =>{
  const id = req.params.vaccineId

  Vaccine.updateOne({_id: id}, {$set: req.body})
    .exec()
    .then(result => {
        res.status(200).json({
        message: 'Vaccine updated',
        upated_ops: req.body,
        request: {
            type: 'GET',
            url: "/vaccines/" + id
        }
        })
    })
    .catch(err=>{
        const error_msg = 'Update Vaccine by ID Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
        err_msg: error_msg
        })
    })
}

/* delete a vaccine by id */
const deleteVaccineById = (req, res, next) =>{
  const id = req.params.vaccineId;
  Vaccine.deleteMany({_id: id})
    .exec()
    .then(result=>{
      /* after deleted the vaccine from db, those in hosp-vacc relationship should be delete too */
      deleteHospVaccRelationById(id, res)
    })
    .catch(err=>{
      const error_msg = 'Delete Vaccine by ID Error : ' + err.message
      console.log(error_msg)
      res.status(500).json({
        err_msg: error_msg
      })
    })
}

const deleteHospVaccRelationById = (id, res) =>{
  HospVacc.deleteMany({vaccine_id: id})
      .exec()
      .then(result=>{
        res.status(200).json({
          message: 'vaccineId : ' + id + ' in HospVacc relation Deleted',
          request:{
            type: 'GET',
            url : '/hospitals_vaccines'
          }
        })
      })
      .catch(err=>{
        const error_msg = 'Delete Vaccine by ID in HospVacc relation Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
          err_msg: error_msg
        })
      })
}

module.exports = {
    getAllVaccines,
    getVaccineById,
    postVaccine,
    updateVaccineById,
    deleteVaccineById
}