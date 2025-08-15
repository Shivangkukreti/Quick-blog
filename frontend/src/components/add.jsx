import { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import  Quill  from "quill";

import "quill/dist/quill.snow.css"
import axios from "axios";
import { Appcontext } from "../context/appcontext";
import { parse } from "marked";
import { toast } from "react-toastify";



function Addblog() {
    const [formdata, setform] = useState({title:'',subtitle:'',category:'Technology'});
     let [image,setimage]=useState("")
   let quillref=useRef()
let editorref=useRef()
useEffect(()=>{
    if (!quillref.current && editorref.current) {
        quillref.current=new Quill(editorref.current,{theme:'snow'})
    }
},[])

    let {api}=useContext(Appcontext)
    function handleall(event) {
      const { name, value } = event.target;
      setform(prev => ({
        ...prev,
        [name]: value
      }));
    }

    async function getcontent() {
        let {data}=await axios.post(api+'/api/blog/getcontent',{prompt:(formdata.title + formdata.subtitle)})
        quillref.current.root.innerHTML=parse(data.response);
        
    }
 
    async function handlesubmit(event) {
      event.preventDefault();
      formdata.desc=quillref.current.root.innerHTML;
      let blogdata=new FormData()
      blogdata.append('title',formdata.title)
      blogdata.append('subtitle',formdata.subtitle)
      blogdata.append('category',formdata.category)
      blogdata.append('image',image)
      blogdata.append('desc',formdata.desc)
    setform({title:'',subtitle:'',category:'Technology'});
    setimage('')
      quillref.current.root.innerHTML=''
      try {
       let {data}=await axios.post(api+'/api/blog/addblog',blogdata)
       if (data.success) {
        toast.success(data.message); 
       }else{
        toast.error(data.message)
       }
      
      } catch (error) {
        toast.error(error.message);
        
      }    
    }

   
 

    return ( 
        <div className="container max-sm:p-5 p-10 mb-20">
            <form onSubmit={handlesubmit} className=" p-5 md:p-10 mx-auto bg-white rounded-2xl flex flex-col gap-3 w-120 lg:w-150 max-sm:w-full">
            <label >
                <p className="text-gray-500 max-sm:text-xs cursor-pointer font-medium">THUMBNAIL</p>
                <input  onChange={(e)=>{
                    let file=e.target.files[0]
                if (file) {
                    setimage(file)
                }}
                } className="hidden "  type="file"   />
                <img  src={image ? URL.createObjectURL(image)  : assets.upload_area} alt="" />
            </label>
            <label >
                <p className="text-gray-500 max-sm:text-xs font-medium">BLOG TITLE</p>
                <input value={formdata.title} onChange={handleall} className="border border-gray-200 rounded p-2 outline-none w-full" type="text" name="title"  />
            </label>
            <label >
                <p className="text-gray-500 max-sm:text-xs font-medium">BLOG SUBTITLE</p>
                <input value={formdata.subtitle} onChange={handleall} className="border border-gray-200 rounded p-2 outline-none w-full" type="text" name="subtitle"  />
            </label>
            <label >
                <p className="text-gray-500 max-sm:text-xs font-medium">CATEGORY</p>
                <select value={formdata.category} onChange={handleall} className="border border-gray-300 rounded-xl px-4 py-1 outline-none" name="category" >
                    <option  value="Technology">Technology</option>
                    <option value="Startup">Startup</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Finance">Finance</option>
                    </select>
            </label>
            <label className="relative" >
                <p className="text-gray-500 max-sm:text-xs font-medium">BLOG DESC</p>
                <div  name='desc' className="min-h-30 " ref={editorref}></div>
                <span onClick={getcontent} className="bg-gray-800 duration-700 hover:bg-indigo-600 hover:animate-none max-sm:text-xs cursor-pointer  absolute bottom-1 animate-pulse right-1 p-2 rounded-2xl text-white py-1 px-2">AI Gen</span>
                {/* <input className="border border-gray-200 rounded p-2 outline-none w-full" type="text" name=""  /> */}
            </label>
            <button  className="border px-4 duration-1000 py-2 w-fit mx-auto rounded-2xl hover:bg-black hover:text-white hover:scale-95">ADD</button>
            </form>

        </div>
     );
}

export default Addblog;