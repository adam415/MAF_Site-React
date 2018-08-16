const mongoose = require('mongoose');

const dbUrl = require('../config').dbUrl;
const User = require('./models/User');

mongoose.Promise = global.Promise;

var connected = false;

function connect() {
    if (connected) return;

    mongoose.connect(dbUrl, { useNewUrlParser: true }, err => {
        if (err) {
            connected = false;
            console.error(`Couldn't connect to db "${dbUrl}":\n${err}`);
        }
        else {
            connected = true;
            console.log(`Connected to db "${dbUrl}"`);
        }
    });
}

function saveUser(name, age) {
    if (!connected) {
        console.error("Cannot save user data because database is not connected");
    }

    const user = new User({
        name: name,
        age: age
    });

    return user.save(err => {
        if (err) {
            console.error(`Couldn't save user data:\n${err}`);
        }
        else {
            // console.log("User data have been successfully saved to db");
        }
    });
}

function findUserById(id) {
    if (!connected) {
        console.error("Cannot save user data because database is not connected");
    }

    return User.findById(id);
}

function replaceUser(id, name, age) {
    if (!connected) {
        console.error("Cannot save user data because database is not connected");
    }

    return User.findById(id).then(user => {
        user.name = name;
        user.age = age;

        return user.save();
    })
}

function queryUsers() {
    return User.find();
}

function deleteUser(id) {
    if (!connected) {
        console.error("Cannot delete user data because database is not connected");
    }

    return User.findById(id).then(user => user.remove());
}

module.exports = {
    connect: connect,
    saveUser: saveUser,
    queryUsers: queryUsers,
    findUserById: findUserById,
    replaceUser: replaceUser,
    deleteUser: deleteUser
};