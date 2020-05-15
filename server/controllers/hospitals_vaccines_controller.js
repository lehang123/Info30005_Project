const HospVacc = require('../models/hospital_vaccine');
const mongoose = require('mongoose')

/* upload a hospital and vaccine relationship,
 as hospital to vaccine is many to many relationship */
const postHospVacc = (req, res, next)=>{
    const hospVacc = new HospVacc({
        _id: new mongoose.Types.ObjectId(),
        hospital_id: req.body.hospital_id,
        vaccine_id: req.body.vaccine_id,
        stocks: req.body.stocks
    })
    hospVacc.save()
    .then(result=>{
        console.log('created new hospital_vaccine : ' + result)
        res.status(201).json({
            message: 'created new hospital_vaccine successfully',
            new_hospital_vaccine: result,
            request:{
                type: 'GET',
                url: "/hospitals_vaccines/" + result._id
            }
        })
    })
    .catch(err=>{
        const err_msg = 'POST create hospital_vaccine error : ' + err.message
        console.log(err_msg);
        res.status(500).json({ error: err_msg});
    })
}

/* update a hospital and vaccine relationship, for example increase or decrease stock number */
const updateHospVacc = (req, res, next)=>{
    const hospital_id = req.query.hospital_id;
    const vaccine_id = req.query.vaccine_id;
    const update_number = req.query.update_number;
    HospVacc.updateOne({hospital_id: hospital_id, vaccine_id: vaccine_id}, {$inc: {stocks: update_number}})
      .exec()
      .then(result => {
        console.log(result)
        res.status(200).json({
          message: 'Hospital_Vaccine updated',
          upated_ops: req.query
        })
      })
      .catch(err=>{
        const error_msg = 'Update Hospitals_Vaccines by IDs Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
          err_msg: error_msg
        })
      })
}

module.exports = {
    postHospVacc,
    updateHospVacc
}