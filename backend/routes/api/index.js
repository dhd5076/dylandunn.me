var express = require('express');
var userRouter = require('./user');
var router = express.Router();

router.use('/ping', function(req, res) {
    res.send('pong');
});

router.use('/user', userRouter)

module.exports = router;
