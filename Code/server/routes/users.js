var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1, username: "Tonny"},
    {id:2, username: "Jimmy"},
    {id:3, username: "Fanny"}
  ])
});

module.exports = router;
