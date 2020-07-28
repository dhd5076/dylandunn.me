var express = require('express');
var response = require('../../utils/response');
var userController = require('../../controllers/userController');

var router = express.Router();

router.get('/', (req, res) => {
    if(req.isAuthenticated) {
        res.send(response.generate("Authorized", null))
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

router.delete('/', (req, res) => {
    req.session.destroy();
    res.send(response.generate(null, null))
});

router.post('/', (req, res) => {
    userController.auth(req.body.email, req.body.password)
    .then((user) => {
        req.session.user = user;
        req.session.save();
        res.send(response.generate({ api_key: user.api_key }, null))
    })
    .catch((error) => {
        res.send(response.generate(null, error.message));
    });
});

module.exports = router;