const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const routes = require('./routes/index');

// initialize an express app
const app = express();

// Handlebars Template Engine configuration
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars');

// Set static files folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const PORT = 5000;
const HOST = '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
