const express = require('express');
const router = express.Router();
const auth = require('../app/middlewares/auth');
const UserController = require('../app/controllers/UserController');

router.get('/user/profile', auth, UserController.profile);

module.exports = router;