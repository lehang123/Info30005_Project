const express = require('express');
const router = express.Router();
const hospitalVaccineController = require('../controllers/hospitals_vaccines_controller');

/* POST hospital_vaccine to database. */
router.post("/", (req, res, next)=>{
  hospitalVaccineController.postHospVacc(req, res, next)
})

/* PATCH to update partial resource (hospital_vaccine by both ids), vaccine stocks in hospital (inc or dec) */
router.patch("/", (req, res, next)=>{
    hospitalVaccineController.updateHospVacc(req, res, next)
  })

module.exports = router;