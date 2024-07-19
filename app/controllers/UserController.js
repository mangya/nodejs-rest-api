const apiResponse = require('../../helpers/apiResponse');

/**
 * User profile
 * 
 * @returns {Object}
 */
exports.profile = [
    function (req, res) {
        try {
            return apiResponse.successResponse(
                res,
                req.user
            );
        } catch (error) {
            return apiResponse.ErrorResponse(res, error.message);
        }
    }
];