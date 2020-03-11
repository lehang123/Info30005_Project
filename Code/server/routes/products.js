var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1, productname: "bannana"},
    {id:2, productname: "apple"},
    {id:3, productname: "pear"}
  ])
});

module.exports = router;