const path = require('path');
const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const homeRoutes = require('./routes/home');

const app = express();

app.use(homeRoutes);

env.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//To allow cross-origin requests
app.use(cors());

app.listen(process.env.PORT);
console.log('App listening on port ' + process.env.PORT);