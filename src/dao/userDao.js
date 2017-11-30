require('babel-polyfill');
var mongoose = require("mongoose");
var db = mongoose.createConnection("mongodb://localhost/test");
var Schema = mongoose.Schema;
const user = require('../model/user.js')(Schema,db);

db.once('open', function (callback) {
    // yay!
    console.log("mongoose connect success");
});
db.on('error',console.error.bind(console, 'connection error:'));

var userDao = async (userInfo) => {
    let new_user = new user({
        username:userInfo.username,
        password:userInfo.password,
        sex:userInfo.sex,
        tel:userInfo.tel
    })
    new_user.save(function (err, userEntity) {
        if (err) return console.error(err);
    });

}

module.exports = {
    userDao : userDao
}