// Node-modules import
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

// Local import
const route = require('./routes');
const db = require('./config/db');

// Connect to Database
db.connectToDb();

// Set tatic folder
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/img')));
app.use(express.static(path.join(__dirname, 'public/fonts')));

// Engine express-handlebars setup
handlebars.create({
    helpers: {
        sum: (a,b) => a+b,
    }
});

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));

// HTTP logger
app.use(morgan('combined'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method-override
app.use(methodOverride('_method'));


// Routes init
route(app);

app.listen(3000)
