var express = require('express');
var cookieParser = require('cookie-parser');
let cors = require('cors')
const logger = require('morgan')
const bodyParser   = require('body-parser');
const path         = require('path');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

require('./config/db.setup')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin:[process.env.HEROKU]
}))

app.use('/', indexRouter);

app.get((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
