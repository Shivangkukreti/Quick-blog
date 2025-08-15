import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import TextType from '../util/texttype';
import { Appcontext } from "../context/appcontext";

function Hero() {
    let [exp,setexp]=useState('')
    let{getsearch}=useContext(Appcontext)
    return ( 
        <div className="container mt-20   mx-auto px-5 md:px-20 flex flex-col items-center gap-7    ">
            <img src={assets.gradientBackground} className="absolute max-sm:h-100 top-0 md:-top-30 -z-1" alt="" />
            <span className="text-indigo-600 flex items-center gap-2 px-4 py-2 
            border rounded-4xl border-indigo-700 w-fit max-md:text-xs bg-indigo-100">New: AI feature integrated 
            <img className="animate-bounce h-5" src={assets.star_icon} alt="" />
            </span>

                <TextType 
            text={["Powered by AI", "for your websites", "Happy Blogging!"]}
            typingSpeed={50}
            pauseDuration={50}
            showCursor={true}
            cursorCharacter="|"
           className="text-4xl text-indigo-700 "

            />
          
            <h2 className="font-medium text-gray-700 text-4xl md:text-6xl text-center ">Your own  <p className="text-indigo-700 inline animate-pulse ">blogging </p> platform.</h2>
            <p className="text-gray-500  max-md:text-xs">
                This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>

            <label className="flex w-[50%] max-sm:w-[90%] bg-white rounded border border-gray-200 shadow" >
                <input value={exp}  onChange={(e)=>setexp(e.target.value)} className="w-full outline-none p-2 " type="text" placeholder="Search for Blogs" name=""  />
                <button onClick={()=>{getsearch(exp),setexp('')}} className=" bg-indigo-600 m-1 rounded text-white px-6 max-md:text-xs  flex items-center gap-2 py-2">Search</button>
            </label>
            
        </div>
     );
}

export default Hero;