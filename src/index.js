// Node-modules import
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();

// Local import
const route = require('./routes');
const db = require('./config/db');

// Connect to Database
db.connectToDb();

// Set tatic folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/img')));
// Engine express-handlebars setup
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));

// HTTP logger
app.use(morgan('combined'));

// Routes init
route(app);

app.listen(3000)
