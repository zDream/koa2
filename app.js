const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/index');
const views = require('koa-views');
const convert  = require('koa-convert');
const path = require('path');
const cors = require('koa2-cors');
const app = new Koa();
app.use(cors())
//post body 解析
app.use(bodyParser());

//static file
app.use(convert(require('koa-static')(path.join(__dirname + '/public'))));
app.use(convert(require('koa-static')(path.join(__dirname + '/plug-in'))));
app.use(convert(require('koa-static')(path.join(__dirname + '/page'))));

//支持ejs模板
app.use(views(__dirname + '/page', {
  extension: 'ejs'
}));

//注册路由
app.use(router.routes(),router.allowedMethods());

//在端口3000监听:
app.listen(3000);
console.log('src started at port 3000...');
