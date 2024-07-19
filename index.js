const path = require('path');
const cors = require('cors');
const env = require('dotenv');
const helmet = require('helmet');
const express = require('express');
const routes = require('./routes');
const passport    = require('passport');
const bodyParser = require('body-parser');
const compression = require('compression');
const { jwtStrategy } = require('./config/passport');

const app = express();

env.config();
// set security HTTP headers
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// gzip compression
app.use(compression());
//To allow cross-origin requests
app.use(cors());
// jwt authentication
passport.use(jwtStrategy);
///app.use(passport.initialize());
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res) => {
	console.log(err);
});

app.listen(process.env.PORT);
console.log('App listening on port ' + process.env.PORT);