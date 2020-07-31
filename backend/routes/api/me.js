var express = require('express');
var response = require('../../utils/response');
var userController = require('../../controllers/userController');

var router = express.Router();

router.get('/', (req, res) => {
    if(req.isAuthenticated) {
        res.send(response.generate(res.session.user, null))
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

module.exports = router;
