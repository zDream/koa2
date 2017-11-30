import userService from './../service/userService'
var regedit = async (ctx, next) => {

    try {
        let userInfo = {
            username : ctx.request.body.username,
            password : ctx.request.body.password,
            sex : ctx.request.body.sex,
            tel : ctx.request.body.tel
        }
        // user.create(userInfo);
        console.log("userinfo = "+Object.entries(userInfo));
        userService.userService(userInfo)
        ctx.redirect("/");

    }catch (e) {
        ctx.body = "注册失败，系统错误";
    }
}
var index = async (ctx,next) => {
    await ctx.render('index',{
        title:'首页'
    })
}
var upload = async (ctx,next) => {
    await  ctx.render('upload')
}
module.exports = {
    register: async (ctx, next) => {
        await ctx.render('register', {
            title:'注册'
        });
    },
    UserRegister: regedit,
    index : index,
    upload : upload
}
