const mongoose = require('mongoose')
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const User = Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    id:{type:String}
})

module.exports= mongoose.models.User|| mongoose.model('User',User)