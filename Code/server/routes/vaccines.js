var express = require('express');
var router = express.Router();
const vaccineController = require('../controllers/vaccines_controller')

/* GET vaccines listing. */
router.get('/', function(req, res, next) {
  vaccineController.getAllVaccines(req, res, next)
});

/* GET a vaccine by id. */
router.get("/:vaccineId", (req, res, next)=>{
  vaccineController.getVaccineById(req, res, next)
})

/* POST a new vaccine to database. */
router.post("/", (req, res, next)=>{
  vaccineController.postVaccine(req, res, next)
})

/* PATCH to update partial resource (vaccine by id) $set operator is invloved 
    todo: might be some more update way to do
*/
router.patch("/:vaccineId", (req, res, next)=>{
  vaccineController.updateVaccineById(req, res, next)
})

/*DELETE to delete vaccine by id */
router.delete("/:vaccineId", (req, res, next)=>{
  vaccineController.deleteVaccineById(req, res, next)
})

module.exports = router;