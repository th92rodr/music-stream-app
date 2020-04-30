const express = require('express');
const bodyparser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');

const routes = require('./routes');

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

app.use('/v1', routes);

module.exports = app;
