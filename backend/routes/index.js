var express = require('express');
var apiRouter = require('./api');
var router = express.Router();

router.use('/api', apiRouter);

module.exports = router;
