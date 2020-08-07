  
/**
 * @file User Model
 */

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title Required']
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

UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(4, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
            if (error) {
                reject(error)
            } else {
                resolve(isMatch);
            }
        });
    })
};

module.exports = mongoose.model('User', UserSchema);