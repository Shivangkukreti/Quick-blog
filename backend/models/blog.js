const mongoose=require('mongoose')
const review = require('./review')
const Schema=mongoose.Schema

let sch=new Schema({
    title:{type:String,required:true},
    subtitle:{type:String,required:true},
    desc:{type:String,required:true},
    image:{type:String,required:true},
    publish:{type:Boolean,default:true},
    category:{type:String,enum:["Technology","Lifestyle","Finance","Startup"],required:true},
    reviews:[{type:Schema.Types.ObjectId,ref:'review',default:[]}]
})

sch.post('findOneAndDelete',async(data)=>{
    if (data) {
        await review.deleteMany({ _id : { $in : data.reviews }})
    }
})

let blog=mongoose.model('blog',sch)
module.exports=blog
