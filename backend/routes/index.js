var express = require('express');
var apiRouter = require('./api');
var router = express.Router();

/* GET home page. */
router.use('/api', apiRouter);

module.exports = router;
