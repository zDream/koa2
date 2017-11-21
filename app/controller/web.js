// var models = require('../../model/user.js');
const crypto = require('crypto');
const userService = require('./../service/userService');
const models = require('../model/user')

var regedit = async (ctx, next) => {
    try {
        // let userSchema = models.obj;
        // userSchema.set("username",ctx.request.body.username);
        // userSchema.set("password",ctx.request.body.password);
        // userSchema.set("sex",ctx.request.body.sex);
        // userSchema.set("tel",ctx.request.body.tel);
        // console.log("userschema = "+userSchema.toString());
        // console.log("userschema = "+userSchema);
        let userInfo = {
            username : ctx.request.body.username,
            password : ctx.request.body.password,
            sex : ctx.request.body.sex,
            tel : ctx.request.body.tel
        }
        console.log("userinfo = "+userInfo);
        userService.userService(userInfo)
        // var md5 = crypto.createHash('md5');
        // userInfo.salt=new Date()+userInfo.username;//md5 salt
        // userInfo.password=md5.update(userInfo.password+userInfo.salt,'utf8').digest('base64');//md5加盐加密
        // var checkUserName = await models.User.find({username:userInfo.username});
        // if (checkUserName.length == 0 ) {
        //     await models.User.create(userInfo);
        //     ctx.body = "注册成功！";
        // }else {
        //     ctx.body = "此用户名已被占用！";
        // }

    }catch (e) {
        ctx.body = "注册失败，系统错误";
    }
}
var index = async (ctx,next) => {
    await ctx.render('index',{title:'首页'})
}

module.exports = {
    register: async (ctx, next) => {
        await ctx.render('register', {
            title:'注册'
        });
    },
    UserRegister: regedit,
    index : index
}
