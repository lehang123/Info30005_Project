const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitals_controller');


/* GET hospitals listing. */
router.get('/', function(req, res, next) {
  hospitalController.getAllHospitals(req, res, next)
  });

/* GET hospital by id. */
router.get("/:hospitalId", (req, res, next)=>{
  hospitalController.getHospitalById(req, res, next)
})

/* POST hospital to database. */
router.post("/", (req, res, next)=>{
  hospitalController.postHospital(req, res, next)
})

/* PATCH to update partial resource (hospital by id) $set operator is invloved 
    todo: might be some more update way to do
*/
router.patch("/:hospitalId", (req, res, next)=>{
  hospitalController.updateHospitalById(req, res, next)
})
  
/*DELETE to delete vaccine by id */
router.delete("/:hospitalId", (req, res, next)=>{
  hospitalController.deleteHospitalById(req, res, next)
})



module.exports = router;