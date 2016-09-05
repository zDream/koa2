var router = require('koa-router')();
var index = require('../controller/index');
var web = require('../controller/web');
//首页
router.get('/',index.index);
//注册
router.get('/register',web.register);
router.post('/UserRegister',web.UserRegister);

module.exports = router;
