var express = require('express');
var router = express.Router();
const appointmentController = require('../controllers/appointments_controller');

/* POST appointment to database. */
router.post("/", (req, res, next)=>{
    appointmentController.postAppointments(req, res, next)
})

/* DELETE appointment from database. */
router.delete("/:appointmentId", (req, res, next)=>{
    appointmentController.deleteAppointments(req, res, next)
})

module.exports = router;