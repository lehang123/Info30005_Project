var express = require('express');
var router = express.Router();
const Vaccine = require('../database/vaccine');
const server = require('../app');

/* GET vaccines listing. */
router.get('/', function(req, res, next) {
  Vaccine.find()
  .select('_id name alleries prevent_disease good_for_groups recommend_star')
  .exec()
  .then(docs => {
    const respone = {
      count: docs.length, // how many entries
      vaccines: docs.map(doc => {
        return {
          name: doc.name,
          prevent_disease: doc.prevent_disease,
          alleries: doc.alleries,
          good_for_groups: good_for_groups,
          recommend_star: recommend_star,
          request: {
            type: "GET",
            url: server.url + "/vaccines/" + doc._id,
          }
        }
      })
    }

    res.status(200).json(respone);
  })
  .catch(err=>{
    console.log(err);
    res.status(500)
  })
});

module.exports = router;