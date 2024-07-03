require('dotenv').config()

module.exports = {
	development: {
		// url: process.env.DEV_DATABASE_URL,
		database: process.env.DB_DATABASE,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		dialect: process.env.DB_CONNECTION
	},
	test: {
		url: process.env.TEST_DATABASE_URL,
		dialect: process.env.DB_CONNECTION
	},
	production: {
		url: process.env.DATABASE_URL,
		dialect: process.env.DB_CONNECTION
	},
}