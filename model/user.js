/**jhoncy
 * Created by jhoncy on 2016/9/2.
 */
/*
*   TTD
**/
var mongoose = require('mongoose');

// 用户模式
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    salt:String,//md5 salt
});

// 绑定模型
var User = mongoose.model('User', userSchema);

// 导出模型
exports.User = User;
