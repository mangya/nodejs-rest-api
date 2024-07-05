var express = require("express");
var router = express.Router();
const AuthController = require("../app/controllers/AuthController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/verify-email/:code", AuthController.verifyEmail);

module.exports = router;