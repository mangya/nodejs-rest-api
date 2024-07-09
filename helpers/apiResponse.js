const httpStatus = require('http-status');

exports.successResponse = function (res, msg) {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(httpStatus.OK).json(data);
};

exports.successResponseWithData = function (res, msg, data, statusCode) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(statusCode).json(resData);
};

exports.ErrorResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(data);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(httpStatus.NOT_FOUND).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(httpStatus.BAD_REQUEST).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(httpStatus.UNAUTHORIZED).json(data);
};