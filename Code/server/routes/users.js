const express = require('express');
const usersController = require('../controllers/users_controller');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // todo: do we really want ?
});

/* respone to signup post request. */
router.post('/signup', function(req, res, next) {
  usersController.signupUser(req, res, next)
})

router.post('/login', (req, res, next)=>{
  // find user with the match username from 
  usersController.loginUser(req, res, next)
})

module.exports = router;
