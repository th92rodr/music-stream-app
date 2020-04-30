const express = require('express');
const bodyparser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');

require('./database/').connect();

const cors = require('./middlewares/cors');
const checkAuthentication = require('./middlewares/authentication');
const { logger } = require('./middlewares/logger');

const routes = require('./routes/');

const app = express();

// Handlebars Template Engine configuration
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Set static files folder
app.use(express.static(path.join(__dirname, 'public')));

// Add a parser for JSON format requests
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// the parsing will result in a key-value pairs object
// with the extended flag set as true, the result object can have values of any type
// this object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).

// MIDDLEWARES
app.use(cors);
app.use(checkAuthentication);
app.use(logger);

app.use('/', routes);

module.exports = app;
