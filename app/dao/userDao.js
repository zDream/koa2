var mongoose = require("mongoose");
var db = mongoose.createConnection("mongodb://localhost/test");
var Schema = mongoose.Schema;

db.once('open', function (callback) {
    // yay!
    console.log("mongoose connect success");
});
db.on('error',console.error.bind(console, 'connection error:'));

var userDao =  (userInfo) => {
    var userSchema =Schema({
        username : String,
        password : String,
        sex : String,
        tel : Number
    })
    // userSchema.obj = userInfo;

    // try{
        var userModel = db.model("user",userSchema);
    // }catch (e){
    //     if(e.name ===  'OverwriteModelError'){
    //         userModel = db.model("user");
    //     }
    // }

    var userEntity = new userModel();
    userEntity.set("username",userInfo.username);
    userEntity.set("password",userInfo.password);
    userEntity.set("sex",userInfo.sex);
    userEntity.set("tel",userInfo.tel);

    userEntity.save(function (err, userEntity) {
        if(err) return  console.error(err);
        // userEntity.speak();
    });
}

module.exports = {
    userDao : userDao
}