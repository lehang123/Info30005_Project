var express = require('express');
var router = express.Router();
const Hospital = require('../database/hospital');
const server = require('../app');
const mongoose = require('mongoose')

/* GET hospitals listing. */
router.get('/', function(req, res, next) {
    Hospital.find()
    .select('_id name location language')
    .exec()
    .then(docs => {
      const respone = {
        count: docs.length, // how many entries
        vaccines: docs.map(doc => {
          return {
            name: doc.name,
            location: doc.location,
            language: doc.language,
            request: {
              type: "GET",
              url: server.url + "/hospitals/" + doc._id,
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
  });

/* GET hospital by id. */
router.get("/:hospitalId", (req, res, next)=>{
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
            url: server.url + '/hospitals'
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
})

/* POST hospital to database. */
router.post("/", (req, res, next)=>{
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
                url: server.url + "/hospitals/" + result._id
            }
        })
    })
    .catch(err=>{
        const err_msg = 'POST create hospital error : ' + err.message
        console.log(err_msg);
        res.status(500).json({ error: err_msg});
    })
})

/* PATCH to update partial resource (hospital by id) $set operator is invloved 
    todo: might be some more update way to do
*/
router.patch("/:hospitalId", (req, res, next)=>{
    const id = req.params.hospitalId
  
    Hospital.update({_id: id}, {$set: req.body})
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Hospital updated',
          upated_ops: req.body,
          request: {
            type: 'GET',
            url: server.url + "/hospitals/" + id
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
  })
  
  /*DELETE to delete vaccine by id */
  router.delete("/:hospitalId", (req, res, next)=>{
    const id = req.params.hospitalId;
    Hospital.remove({_id: id})
      .exec()
      .then(result=>{
        res.status(200).json({
          message: 'hospitalId : ' + id + 'Deleted',
          request:{
            type: 'GET',
            url : server.url + '/hospitals'
          }
        })
      })
      .catch(err=>{
        const error_msg = 'Delete Hospital by ID Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
          err_msg: error_msg
        })
      })
  })



module.exports = router;