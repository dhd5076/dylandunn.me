var Post = require('../models/Post');

exports.create = function(title, image, content, author) {
    return new Promise((resolve, reject) => {
        var post = new Post({
            title: title,
            image: image,
            content: content,
            author: author
        });
        post.save()
        .then(() => {
            resolve(post._id);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

exports.getAll = function() {
    return new Promise((resolve, reject) => {
        Post.find({}, function(err, posts) {
            if(err) {
                reject(err);
            } else {
                resolve(posts);
            }
        });
    });
}
