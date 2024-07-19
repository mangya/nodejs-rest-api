const passport = require('passport');
const apiResponse = require('../../helpers/apiResponse');

const auth = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if (err) { return apiResponse.unauthorizedResponse(res, 'Unauthorized'); }
        if (!user) { return apiResponse.unauthorizedResponse(res, 'Unauthorized'); }
        req.user = user;
        next();
    })(req, res, next);
};

module.exports = auth;