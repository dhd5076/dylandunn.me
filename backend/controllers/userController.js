var User = require('../models/User');
var randomstring = require('randomstring');
const mongoose = require('mongoose');
var response = require('../utils/response');

exports.auth = function(email, password) {
    return new Promise((resolve, reject) => {
        User.findOne({email : email})
        .then((user) => {
            if(user) {
                user.comparePassword(password)
                .then((isMatch) => {
                    if(isMatch) {  
                        resolve(user);
                    } else {
                        reject(new Error("Incorrect Email Or Password"));
                    }
                })
                .catch((error) => {
                    reject(error);
                })
            } else {
                reject(new Error("Incorrect Email Or Password"));
            }
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}

exports.create = function(firstname, lastname, gender, email, password) {
    return new Promise((resolve, reject) => {
        var user = new User({
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            email: email,
            password: password,
            api_key: randomstring.generate(32)
        });
        user.save()
        .then(() => {
            resolve(user._id);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

exports.getAll = function() {
    return new Promise((resolve, reject) => {
        User.find({}, function(err, users) {
            if(err) {
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

exports.get = function(id) {
    return new Promise((resolve, reject) => {
        User.findOne({ _id :  id })
        .then((user) => {
            resolve(user);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

exports.delete = function(id) {
    return new Promise((resolve, reject) => {
        User.deleteOne({ _id: id })
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}

exports.deleteAll = function() {
    return new Promise((resolve, reject) => {
        User.deleteMany({})
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}