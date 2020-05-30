var express = require('express');
var router = express.Router();
const appointmentController = require('../controllers/appointments_controller');

/* GET appointment listings from database. */
router.get("/", (req, res, next)=>{
    appointmentController.getAppointments(req, res, next)
})

/* POST appointment to database. */
router.post("/", (req, res, next)=>{
    appointmentController.postAppointments(req, res, next)
})

/* DELETE appointment from database. */
router.delete("/:appointmentId", (req, res, next)=>{
    appointmentController.deleteAppointments(req, res, next)
})

/* GET appointment by patient id. */
router.get("/:patientId", (req, res, next)=>{
    appointmentController.getAppointmentsByPatientId(req, res, next)
})

/* UPDATE appointment by appointment id. */
router.patch("/:appointmentId", (req, res, next)=>{
    appointmentController.updateAppointment(req, res, next)
})

module.exports = router;