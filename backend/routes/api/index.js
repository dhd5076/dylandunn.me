var express = require('express');
var userRouter = require('./user');
var authRouter = require('./auth');
var meRouter = require('./me');
var postRouter = require('./post');
var router = express.Router();

router.get('/ping', function(req, res) {
    res.send('pong');
});

router.use('/post', postRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/me', meRouter);
module.exports = router;
