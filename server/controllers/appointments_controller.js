var Appointment = require('../models/appointment')
var Vaccine = require('../models/vaccine')
var Hospital = require('../models/hospital')
var Patient = require('../models/patient')

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
    Appointment.deleteMany({_id: id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message: 'Appointment deleted'
        })
    })
    .catch(err=>{
        const error_msg = 'Delete Appointment by ID Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
            message: 'Appointment delete fails'
        })
    })
}

const updateAppointment = (req, res, next) =>{
    const id = req.params.appointmentId;
    Appointment.updateOne({_id: id}, {$set :req.body})
    .exec()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
}

const getAppointmentsByPatientId = (req, res, next)=>{
    const id = req.params.patientId;
    Appointment.find({patient_id:id})
    .exec()
    .then(async doc =>{
        if (doc){
            var news = []
            await Promise.all(doc.map(async appointment => {
                const patient = await Patient.findOne({_id: appointment.patient_id}).exec();
                const hospital = await Hospital.findOne({_id: appointment.hospital_id}).exec();
                const vaccine = await Vaccine.findOne({_id: appointment.vaccine_id}).exec();
                
                let date = new Date(appointment.date_time)
                news.push({
                     id: appointment._id,
                     patient: patient,
                     hospital: hospital,
                     vaccine: vaccine,
                     date_time: date.toString().split('GMT')[0],
                     days_to_appoinment: countDaysToAppointment(appointment.date_time)})
            }))

            res.status(200).json(news)

            // if (news.length == 0){
            //     res.status(404).json({ message: "No valid entry found for provided patientId" })
            // }else{
            //     res.status(200).json(news)
            // }

          }else {
            res.status(404).json({ message: "No valid entry found for provided patientId" })
          }
    }).catch(err=>{
        const error_msg = 'Get Appointment by paitent ID Error : ' + err.message
        console.log(error_msg)
        res.status(500).json({
            err_msg: error_msg
        })
    })
}
  
// todo : update appointments
const countDaysToAppointment = (appointmentDate)=>{

    let today = new Date()
    date = new Date(appointmentDate)
    if (!isValidDate(date)){
        throw new TypeError ("this is not vaild date")
    }
    let elapsed = date.getTime() - today.getTime()

    if (elapsed<0){
        return "appoinment date passed"
    }else{
        let days_left = Math.ceil(elapsed /(1000*60*60*24));

        return days_left.toString() + " days left"
    }
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

module.exports = {
    postAppointments,
    deleteAppointments,
    getAppointments,
    getAppointmentsByPatientId,
    countDaysToAppointment,
    updateAppointment
}