const mongoose=require('mongoose')
const Schema=mongoose.Schema

let sch=new Schema({
    comment:{type:String,required:true},
    blogid:{type:Schema.Types.ObjectId,required:true},
    userid:{type:Schema.Types.ObjectId,required:true},
    username:{type:String,required:true},
})



let review=mongoose.model('review',sch)
module.exports=review

