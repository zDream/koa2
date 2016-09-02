module.exports = {
    register: async (ctx, next) => {
        await ctx.render('web/register', {
            title:'注册'
        });
    },
    UserRegister: async (ctx, next) => {
        try {
            var userInfo = {
                username : ctx.request.body.username,
                password : ctx.request.body.userpassword,
            }
        }catch (e) {

        }
    }
}