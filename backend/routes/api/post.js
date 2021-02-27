var express = require('express');
var response = require('../../utils/response');
var postController = require('../../controllers/postController');

var router = express.Router();


// POST /post
router.post('/', (req, res) => {
    postController.create(req.body.title, "Nothing Yet", req.body.content, req.session.user)
    .then((id) => {
        res.send(response.generate(id, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error.message));
    });
});


// GET /post
router.get('/', (req, res) => {
    postController.getAll()
    .then((posts) => {
        res.send(response.generate(posts, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error.message));
    });
});

module.exports = router;
