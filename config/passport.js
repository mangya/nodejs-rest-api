const { Strategy, ExtractJwt } = require('passport-jwt');
const models = require('../app/models');

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET
};

const jwtStrategy = new Strategy(jwtOptions, (jwtPayload, done) => {
	models.User.findOne({ where: { id: jwtPayload.id } })
		.then(user => {
			if (user) {
				let userData = {
					id: user.id,
					firstName: user.first_name,
					lastName: user.last_name,
					email: user.email,
				};
				return done(null, userData);
			} else {
				return done(null, false);
			}
		})
		.catch(err => done(err, false));
});

module.exports = {
	jwtStrategy,
};