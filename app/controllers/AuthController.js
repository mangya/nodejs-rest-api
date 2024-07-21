const moment = require('moment');
const bcrypt = require("bcrypt");
const models = require('../models');
const jwt = require("jsonwebtoken");
const httpStatus = require('http-status');
const utility = require("../../helpers/utility");
const apiResponse = require('../../helpers/apiResponse');
const { body, param, validationResult } = require("express-validator");

/**
 * User login.
 *
 * @param {string}      email
 * @param {string}      password
 *
 * @returns {Object}
 */
exports.login = [
	body("email").isLength({ min: 1 }).trim().withMessage("Email must be specified.")
		.isEmail().withMessage("Email must be a valid email address."),
	body("password").isLength({ min: 1 }).trim().withMessage("Password must be specified."),
	body("email").escape(),
	body("password").escape(),
	(req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}else {
				models.User.findOne({where: {email: req.body.email}}).then(user => {
					if (user) {
						//Compare given password with db's hash.
						bcrypt.compare(req.body.password,user.password,function (err,same) {
							if(same){
								//Check account confirmation.
								if(user.email_verified_at){
									let userData = {
										id: user.id,
										firstName: user.first_name,
										lastName: user.last_name,
										email: user.email,
									};
									//Prepare JWT token for authentication
									const jwtPayload = userData;
									const jwtData = {
										expiresIn: process.env.JWT_TIMEOUT_DURATION,
									};
									const secret = process.env.JWT_SECRET;
									//Generated JWT token with Payload and secret. 86400 secs = 1 day
									userData.token = jwt.sign(jwtPayload, secret, jwtData);
									return apiResponse.successResponseWithData(res,"Login Success.", userData, httpStatus.OK);
								}else{
									return apiResponse.unauthorizedResponse(res, "Account is not confirmed. Please confirm your account.");
								}
							}else{
								return apiResponse.unauthorizedResponse(res, "Email or Password wrong.");
							}
						});
					}else{
						return apiResponse.unauthorizedResponse(res, "User not found");
					}
				}).catch((error) => {
					return apiResponse.ErrorResponse(res, error);
				});
			}
		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	}];

/**
 * User register.
 *
 * @param {string}      first_name
 * @param {string}      last_name
 * @param {string}      email
 * @param {string}      password
 * @param {string}      confirm_password
 * @param {string}      password
 *
 * @returns {Object}
 */
exports.register = [
	body("first_name").trim().notEmpty().withMessage('First name is required.'),
	body("last_name").trim().notEmpty().withMessage('Last name is required.'),
	body("email").isLength({ min: 1 }).trim().withMessage('Email must be specified.')
		.isEmail().withMessage('Email must be a valid email address.'),
	body("password").isLength({ min: 6 }).trim().withMessage('Password must be 6 characters or greater.'),
	body("confirm_password").trim().notEmpty().withMessage('Confirm password is required.').custom((value, {req}) => (value === req.body.password)).withMessage('Passwords do not match.'),
	body("email").escape(),
	body("password").escape(),
	body("first_name").escape(),
	body("last_name").escape(),
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}
			const existingUser = await models.User.findOne({where: {email: req.body.email}});
            if (existingUser) {
				return apiResponse.ErrorResponse(res, 'Email already in use');
            }
			await bcrypt.hash(req.body.password, 12).then((hashedPassword) => {
				req.body.password = hashedPassword;
				req.body.email_confirmation_code = utility.generateRandomString(12);
			});

			const user = models.User.create(req.body);
			return apiResponse.successResponseWithData(
				res,
				'Registration Success.',
				user,
				200
			);
		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	}];

exports.verifyEmail = [
	param("code").trim().notEmpty().withMessage('Invalid verification code.'),
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}
			models.User.update(
							{	
								email_verified_at: moment().format('YYYY-MM-DD hh:mm:ss'),
								email_confirmation_code: '',
							},
							{where: {email_confirmation_code: req.params.code}}
						).then(result => {
							return apiResponse.successResponse(res, 'Account confirmed success.');
						}).catch(err => {
							return apiResponse.ErrorResponse(res, err);
						});
		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	}];