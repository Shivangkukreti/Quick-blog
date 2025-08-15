import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Appcontext } from "../context/appcontext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
    let[state,setstate]=useState("User")
    let[sign,setsign]=useState(false)
    let {setlogin,api,setusertoken}=useContext(Appcontext)
    const [formdata, setform] = useState({username:'',email:'',password:''});
    
    if (setlogin) {
      window.scrollTo(0,0)
    }

    function handleall(event) {
      const { name, value } = event.target;
      setform(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    useEffect(()=>{
      document.body.style.overflow="hidden"
      return()=>{
        document.body.style.overflow="unset"
      }
    },[])

    async function handlesubmit(event) {
      event.preventDefault();
      if (sign) {
        try {
           let {data}=await axios.post(api+'/api/user/signup',formdata)

        if (data.success) {
          toast.success(data.message);
          setusertoken(data.token)
           localStorage.setItem('usertoken',data.token)
            setlogin(false)
        }else{
          toast.error(data.message);
        }
        } catch (error) {
          toast.error(error.message);
          
        }
       
        }


        else{
          try {
             let {data}=await axios.post(api+'/api/user/login',{email:formdata.email,password:formdata.password})
  
        if (data.success) {
          toast.success(data.message)
          setusertoken(data.token)
          localStorage.setItem('usertoken',data.token)
          setlogin(false)   
        }else{
          toast.error(data.message);
          
        }
          } catch (error) {
            toast.error(error.message);
            
          }
         
      }
      setform({username:'',email:'',password:''});
      
    }


    return ( 
        <div className="absolute   top-0 left-0 bottom-0 right-0 z-10 backdrop-blur-sm flex justify-center items-center">
           <form onSubmit={handlesubmit} className="bg-white relative p-5 max-sm:w-[80%] md:p-10 flex flex-col items-center gap-5 rounded-2xl border border-indigo-300 shadow" >
            <span onClick={()=>setlogin(false)} className="absolute animate-spin   hover:animate-none cursor-pointer right-5 top-0 mt-3 font-bold">X</span>
            <h2 className="flex gap-2 justify-center">
             <span className="text-indigo-600 font-bold text-2xl"> {sign?"User":state}</span >
             <span className="font-bold text-2xl">{sign?"Signup":"Login"}</span>   
            </h2>
            <p className="text-gray-500">Enter your credentials to access the admin panel</p>
            <label className="w-full" >
                <p className="text-gray-600 font-medium">Email</p>
                <input onChange={handleall} value={formdata.email} name="email"  type="email" className="border-b-2 w-full border-gray-400 px-2 outline-none" placeholder="xyz@gmail.com" />
            </label>
            {sign? <label className="w-full" >
                <p className="text-gray-600 font-medium">Name</p>
                <input onChange={handleall} value={formdata.username}  name="username" type="text" className="border-b-2 w-full border-gray-400 px-2 outline-none" placeholder="xyz" />
            </label>:<></>}
            
            <label className="w-full" >
                <p className="text-gray-600 font-medium">Password</p>
                <input onChange={handleall} value={formdata.password} name="password" type="password" className="border-b-2 w-full border-gray-400 px-2 outline-none" placeholder="********" />
            </label>
            <button type="submit" className="text-white px-8  rounded bg-indigo-600 py-2"><img src={assets.arrow} alt="" /></button>
            <div className="max-sm:text-xs">
              <p onClick={()=>{
                setsign(false)
                setstate(state=='User'?"Admin":"User")}} className="text-indigo-600 font-medium cursor-pointer
               hover:bg-indigo-100 text-center rounded-3xl">Login As {state=='User'?"Admin":"User"} ! </p>
               {
                sign? <p>Already have an account ? <span onClick={()=>setsign(false)} className="text-indigo-600 font-medium cursor-pointer
               hover:bg-indigo-100 text-center rounded-3xl px-3 ">Login</span></p> :<p>Don't have an account ? <span onClick={()=>setsign(true)} className="text-indigo-600 font-medium cursor-pointer
               hover:bg-indigo-100 text-center rounded-3xl px-3 ">Signup</span></p>  
               }
            
            </div>
            
           </form>

           </div>
     );
}

export default Login;