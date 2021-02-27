  
/**
 * @file Post Model
 */

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title Required']
    },
    image: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: [true, 'Content Required']
    },
    author: {
        type: String,
        require: [true, 'Author Required']
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Post', PostSchema);