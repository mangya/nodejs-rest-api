var express = require('express');
var router = express.Router();
const authRoute = require('./auth');
const homeRoute = require('./home');
const userRoute = require('./user');

router.use(authRoute);
router.use(homeRoute);
router.use(userRoute);

module.exports = router;