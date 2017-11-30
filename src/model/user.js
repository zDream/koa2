module.exports = function(Schema,db){
    var userSchema = new Schema({
        username : {type:String,required:true},
        password : {type: String,required:true},
        sex : {type: String},
        tel : {type: Number}
    })
    return db.model('user',userSchema);
}
