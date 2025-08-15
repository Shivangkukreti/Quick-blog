const express=require('express')
const router=express.Router() 
const multer = require('multer');
const {storage}=require('../utils/cloud.js');
const main=require('../utils/ai.js');
const blog = require('../models/blog');
const upload = multer({ storage: storage })
const mongoose=require('mongoose')



router.get('/all',async(req,res)=>{
    try {
        let allblogs=await blog.find()
    res.json({success:true,allblogs})
    } catch (error) {
         res.json({success:false,message:error.message})
    }
    
})

router.get('/search',async(req,res)=>{
    let {sch}=req.query
    try {
      sch=sch.toLowerCase().trim()
    let all=await blog.find()
    let results=all.filter(ele=>ele.category.toLowerCase().trim().includes(sch) || ele.title.toLowerCase().trim().includes(sch))
    if (results.length<=0) {
        return res.json({success:false,message:'no such results'})
    }
    res.json({success:true,results})  
    } catch (error) {
        res.json({success:false,message:error.message}) 
    }
    
})


router.get('/:id',async(req,res)=>{
    let {id}=req.params
    try {
    let any=await blog.findById(id).populate('reviews')
    if (!any) {
        return res.json({success:false,message:'no such blog'})
    }
     res.json({success:true,any})  
    } catch (error) {
     res.json({success:false,message:error.message})
    }

})


router.post('/addblog',upload.single('image'),async(req,res)=>{
    let {title,subtitle,desc,category}=req.body
    try {
       let image
    if (req.file) {
        image=req.file.path
    }
    let x=new blog({title,subtitle,image,desc,category})
    await x.save()
    res.json({success:true,message:'blog added'}) 
    } catch (error) {
        res.json({success:false,message:error.message})
    }
    
})


router.post('/:id/delete',async(req,res)=>{
    let {id}=req.params
    try {
    let any=await blog.findById(id)
    if (!any) {
        return res.json({success:false,message:'no such blog'})
    }
    await blog.findByIdAndDelete(id)
     res.json({success:true,message:'Blog deleted'})  
    } catch (error) {
     res.json({success:false,message:error.message})
    }

})


router.post('/:id/unpublish',async(req,res)=>{
    let {id}=req.params
    console.log(id);
    
    try {
    let any=await blog.findById(id)
    if (!any.publish) {
       return res.json({success:false,message:"already unpublished"})
    }
    any.publish=false
    any.save()
    res.json({success:true,message:"blog unpublished"})    
    } catch (error) {
        res.json({success:false,message:error.message})
    }
    
})

router.post('/:id/publish',async(req,res)=>{
    let {id}=req.params
    try {
    let any=await blog.findById(id)
    if (any.publish) {
       return res.json({success:false,message:"already published"})
    }
    any.publish=true
    any.save()
    res.json({success:true,message:"blog published"})    
    } catch (error) {
        res.json({success:false,message:error.message})
    }
    
})


router.post('/getcontent',async(req,res)=>{
    let {prompt}=req.body
    let response=await main(prompt + " -get a suitable blog for this prompt with bold headings and goof fromat,dont and any line representing your role just start the blog,headings should be bold and larger insize")
    res.json({success:true,response})
})

























module.exports=router