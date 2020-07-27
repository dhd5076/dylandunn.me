var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/ping', function(req, res) {
    res.send('pong');
});

module.exports = router;
