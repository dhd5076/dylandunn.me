/**
 * @file /user/ Router
 */
var express = require('express');
var logger = require('../../utils/logger');
var response = require('../../utils/response');
var userController = require('../../controllers/userController');

var router = express.Router();

// GET /user
router.get('/', (req, res) => {
    if(req.isAuthenticated) {
        userController.getAll()
        .then((users) => {
            res.send(response.generate(users, null));
        })
        .catch((error) => {
            res.send(response.generate(null, error));
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

// GET /user/:id
router.get('/:id', (req, res) => {
    if(req.isAuthenticated) {
        userController.get(req.params.id)
        .then((user) => {
            res.send(response.generate(user, null));
        })
        .catch((error) => {
            res.send(response.generate(null, error.message));
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

// POST /user
router.post('/', (req, res) => {
    console.log(req.body)
    userController.create(req.body.firstname, req.body.lastname, req.body.gender, req.body.email, req.body.password)
    .then((users) => {
        res.send(response.generate(users, null));
        logger.info('User', "Created New User: " + req.body.firstname + " " + req.body.lastname)
    })
    .catch((error) => {
        res.send(response.generate(null, error.message));
    })
});

// DELETE /user/:id
router.delete('/:id', (req, res) => {
    if(req.isAuthenticated) {
        userController.delete(req.params.id)
        .then(() => {
            res.send()
        })
        .catch((error) => {
            res.send(response.generate(null, null))
            logger.error('User', "Error Deleting User : " + error.message);
        });
    } else {
        req.send(response.generate(null, "Unauthorized"));
    }
});

module.exports = router;