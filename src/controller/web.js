import userService from './../service/userService'
import multer from 'koa-multer'
import customStroage from '../utils/myCustomStorage'
import path from 'path'
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
var fileUpload = async(ctx,next) => {
    await next()
    let uploadDir = 'assets/uploads/'
    // let storage = multer.diskStorage({
    //     // 文件保存路径
    //     destination: (req, file, cb) => {
    //         cb(null, path.resolve(uploadDir))
    //     },
    //     // 文件重命名
    //     filename: (req, file, cb) => {
    //         let originalnameArr = file.originalname.split('.')
    //         let postfix = originalnameArr[originalnameArr.length - 1]
    //         console.log('originalnameArr', originalnameArr)
    //         let timeNow = Date.now()
    //         cb(null, timeNow + '.' + postfix)
    //     }
    // })
    let mystorage = customStroage({
        // 文件保存路径 文件重命名
        destination: (req, file, cb) => {
            let originalnameArr = req.body.file_name.split('.')
            let postfix = originalnameArr[originalnameArr.length - 1]
            let timeNow = Date.now()
            // cb(null, uploadDir + timeNow + '.' + postfix)
            cb(null, uploadDir + req.body.flag+file.originalname)
            // cb(null, uploadDir + req.body.file_name)
        }
    })
    // 上传实例
    let upload = multer({
        storage: mystorage
        // dest: 'assets/uploads/'
    })

    // 执行单文件上传
    let handle = await upload.single('file')
    let response = await handle(ctx)
    // console.log('upload res', response)
    // console.log('req.file = ',response.req.file);
    // console.log('req.body = ',response.req.body)
    let res
    if (response) {
        res = {
            status: 200,
            msg: '上传成功！',
            data: {
                file: response.req.file,
                filename: response.req.file.filename,
                url: '//' + response.request.header.host + '/' + uploadDir + response.req.file.filename
            }
        }
    } else {
        res = {
            status: 5000,
            msg: '上传失败！',
            data: response
        }
    }
    ctx.body = res || {}
}
var testDemo = async(ctx,next) =>{
    console.log('begin')
    const f1 = await setTimeout(readFile,100000);
    console.log('next')
    const f2 = await readFile();
    console.log('end')
}
const readFile = function () {
    console.log('function')
};
let upload_old = async(ctx,next)=>{
    await ctx.render('upload_old')
}
module.exports = {
    register: async (ctx, next) => {
        await ctx.render('register', {
            title:'注册'
        });
    },
    UserRegister: regedit,
    index : index,
    upload : upload,
    fileUpload : fileUpload,
    testDemo : testDemo,
    upload_old : upload_old
}
