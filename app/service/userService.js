const userDao  = require("../dao/userDao");

var userService = async (userInfo) => {
    userDao.userDao(userInfo);
}

module.exports = {
    userService : userService
}