var router = require('koa-router')();
require('babel-register');
var web = require('../src/controller/web');
//首页
router.get('/',web.index);
//注册
router.get('/register',web.register);
router.post('/regeditUser',web.UserRegister);
router.get('/upload',web.upload);
router.get('/upload_old',web.upload_old);

//上传
router.post('/fileUpload',web.fileUpload)

router.get('/getTest',web.testDemo);
module.exports = router;
