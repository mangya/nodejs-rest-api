var express = require("express");
var router = express.Router();
const AuthController = require("../app/controllers/AuthController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
// router.post("/verify-otp", AuthController.verifyConfirm);
// router.post("/resend-verify-otp", AuthController.resendConfirmOtp);

module.exports = router;