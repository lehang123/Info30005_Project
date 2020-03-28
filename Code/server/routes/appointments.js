var express = require('express');
var router = express.Router();
const Appointment = require('../database/appointment');
const server = require('../app');
const mongoose = require('mongoose')

/* POST appointment to database. */
router.post("/", (req, res, next)=>{
    const appointment = new Appointment({
        _id: new mongoose.Types.ObjectId(),
        hospital_id: req.body.hospital_id,
        patient_id: req.body.patient_id,
        vaccine_id: req.body.vaccine_id,
        date_time: req.body.date_time,
        cost: req.body.cost
    })
    appointment.save()
    .then(result=>{
        console.log('created new appointment : ' + result)
        res.status(201).json({
            message: 'created new appointment successfully',
            new_appointment: result,
            request:{
                type: 'GET',
                url: server.url + "/appointments/" + result._id
            }
        })
    })
    .catch(err=>{
        const err_msg = 'POST create appointment error : ' + err.message
        console.log(err_msg);
        res.status(500).json({ error: err_msg});
    })
})

/* DELETE appointment from database. */
router.delete("/:appointmentId", (req, res, next)=>{
    const id = req.params.appointmentId;
    Appointment.remove({_id: id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message: 'AppointmentId : ' + id + ' Deleted'
        })
    })
    .catch(err=>{
        const error_msg = 'Delete Appointment by ID Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
            err_msg: error_msg
        })
    })
})

module.exports = router;