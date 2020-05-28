const express = require('express');
const usersController = require('../controllers/users_controller');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 usersController.getUsers(req, res, next)
});

/* respone to signup post request. */
router.post('/signup', function(req, res, next) {
  usersController.signupUser(req, res, next)
})

router.post('/login', (req, res, next)=>{
  // find user with the match username from 
  usersController.loginUser(req, res, next)
})

router.patch('/:Id', (req, res, next)=>{
  // update a user's information by it's id
  usersController.updateUser(req, res, next)
})

module.exports = router;
