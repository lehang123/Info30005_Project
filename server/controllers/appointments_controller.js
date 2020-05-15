var Appointment = require('../models/appointment')
const mongoose = require('mongoose')

/* get all the appointment listing on databse*/
const getAppointments = (req, res, next)=>{
    Appointment.find()
    .select('_id hospital_id patient_id vaccine_id date_time cost')
    .exec()
    .then(docs => {
      const respone = {
          count: docs.length, // how many entries
          appointments: docs.map(doc => {
          return {
              id: doc._id,
              hospital_id: doc.hospital_id,
              patient_id: doc.patient_id,
              vaccine_id: doc.vaccine_id,
              date_time: doc.date_time,
              cost: doc.cost
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

// create a new appoinment into the database
const postAppointments = (req, res, next) => {
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
                url: "/appointments/" + result._id
            }
        })
    })
    .catch(err=>{
        const err_msg = 'POST create appointment error : ' + err.message
        console.log(err_msg);
        res.status(500).json({ error: err_msg});
    })
}

// delete an appoinment from our database
const deleteAppointments = (req, res, next) =>{
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
}

// todo : update appointments, get appointments by a sepcific paitent

module.exports = {
    postAppointments,
    deleteAppointments,
    getAppointments
}