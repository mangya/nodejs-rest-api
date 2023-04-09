const apiResponse = require('../../helpers/apiResponse');

exports.home = [
    function (req, res, next) {
        try {
            return apiResponse.successResponse(
                res,
                'Welcome'
            );
        } catch (error) {
            return apiResponse.ErrorResponse(res, error.message);
        }
    }
];