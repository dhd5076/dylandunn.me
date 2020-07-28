var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var colors = require('colors');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('./utils/logger');
var auth = require('./middleware/auth');
var discordController = require('./controllers/discordController');
var indexRouter = require('./routes/');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.disable('etag');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'wingwingwing',
  resave: true,
  saveUninitialized: true
}));

app.use(auth);

app.use('/', indexRouter);

console.log('\033[2J');
var nameplate = '  _  __    \n' +
                ' | |/ /__ _ _ _ ___ _ _ \n' +
                ' | \' </ _` | \'_/ -_) \' \\\n' +
                ' |_|\\\_\\\__,_|_| \___|_||_|' + '    '  + 'v0.0.1' + '\n' +
                '====================================='

console.log(colors.green(nameplate));

mongoose.connect('mongodb://localhost/dingdong', {useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if(!err) {
        logger.log('MongoDB', "Connected To MongoDB Database");
    } else {
        logger.error('MongoDB', 'Failed To Establish A Connection To MongoDB.');
    }
});

discordController.start();

module.exports = app;
