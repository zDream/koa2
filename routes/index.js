var router = require('koa-router')();
var index = require('../controller/index');

router.get('/',index.index);
module.exports = router;
