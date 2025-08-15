const mongoose=require('mongoose')
const Schema=mongoose.Schema

let sch=new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    username:{type:String,required:true},
})

let user=mongoose.model('user',sch)
module.exports=user
