var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');
//User Route Group
router.get('/user', UserController.user_list);
router.get('/user/:id',UserController.user_profile);
router.post('/user/login',UserController.user_login);

module.exports = router;