const express=require('express')
const user = require('../models/user')
const router=express.Router()  
const bcrypt=require('bcryptjs')
let {authjwt,gentoken}=require('../utils/authjwt')
const review = require('../models/review')
const blog = require('../models/blog')




router.post('/signup',async(req,res)=>{
    let {username,email,password}=req.body
    try {
       if (!username || !password || !email) {
        return res.json({success:false,message:"missing credentials"})
    }
    let any=await user.findOne({email})
    if (any) {
       return res.json({success:false,message:"user already exists"})  
    }
    let hash=await bcrypt.hash(password,await bcrypt.genSalt(10))
    let newuser=new user({email,username,password:hash})
    await newuser.save()
    res.json({success:true,message:"user signed in",token:gentoken(newuser.id)})
     
    } catch (error) {
       res.json({success:false,message:error.message}) 
    }

})

router.post('/login',async(req,res)=>{
    let {email,password}=req.body
    try {
       if ( !password || !email) {
        return res.json({success:false,message:"missing credentials"})
    }
    let any=await user.findOne({email})
    if (!any) {
       return res.json({success:false,message:"no such user exists"})  
    }
    if (await bcrypt.compare(password,any.password)) {
        res.json({success:true,message:"user logged in",token:gentoken(any.id)})
    }else{
         res.json({success:false,message:"invalid credentials"}) 
    }
    } catch (error) {
       res.json({success:false,message:error.message}) 
    }

})


router.post('/:id/addreview',authjwt,async(req,res)=>{
let {id}=req.params
let {comment}=req.body
   try {
    if (comment=="" || !id) {
      return res.json({success:false,message:"no comment passed"})
   }
   let any=await blog.findById(id)
   console.log(req.user);
   
   let username=req.user.username
   let userid=req.user.id
   let x=new review({comment,blogid:id,userid,username})
   any.reviews.push(x)
   await any.save()
   await  x.save()
   res.json({success:true,message:"review saved"})  
   } catch (error) {
      res.json({success:false,message:error.message}) 
   }
   
   
})


router.post('/deletereview',authjwt,async(req,res)=>{
   let {revid,blogid}=req.body
   try {
    let x=await review.findById(revid)
   if (!x) {
      return res.json({success:false,message:'no such message'})
   }
   if (req.user.id != x.userid) {
      return res.json({success:false,message:'you arent the user'})
   }
   await blog.findByIdAndUpdate(blogid,{$pull:{reviews:revid}})
   await review.findByIdAndDelete(revid) 
   res.json({success:true,message:"comment deleted"})  
   } catch (error) {
      res.json({success:false,message:error.message}) 
   }
   

})
















module.exports=router