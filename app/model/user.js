const mongoose = require("mongoose");

var userScheam = new mongoose.Schema({
    username : {type:String,required:true},
    password : {type: String,required:true},
    sex : {type: String},
    tel : {type: Number}
})

module.exports = userScheam;