var router = require('koa-router')();
var web = require('../app/controller/web');
//首页
router.get('/',web.index);
//注册
router.get('/register',web.register);
router.post('/regeditUser',web.UserRegister);

module.exports = router;
