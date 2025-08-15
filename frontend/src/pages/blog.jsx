import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";
import Nav from "../components/navbar";
import Each from "../components/each";
import Share from "../components/share";
import Foot from "../components/footer";
import axios from "axios";
import { useContext } from "react";
import { Appcontext } from "../context/appcontext";
import Review from "../components/review";

function Blog() {
    let [blog,setblog]=useState(null)
    let {id}=useParams()
    let{api,allblogs}=useContext(Appcontext)


    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

async function getthatblog() {
          let {data}=await axios.get(api+`/api/blog/${id}`)
          if (data.success) {
            console.log(data.any);
            setblog(data.any)
          }
        }
    useEffect(()=>{
        
        getthatblog()
    },[id])


   return blog ? (
    <>
    <Nav></Nav>
    <Each blog={blog} ></Each>
    <Review getblog={getthatblog} blog={blog}></Review>
    <Share></Share>
    <Foot></Foot>
    
    
    </>
  ) : (
    <div>Loading...</div>
  );
}




export default Blog;