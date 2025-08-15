import axios from "axios";
import { useContext, useState } from "react";
import { Appcontext } from "../context/appcontext";
import { toast } from "react-toastify";

function Review({ blog ,getblog}) {
  let [comment, setcomment] = useState("");
  let {api,usertoken}=useContext(Appcontext)

  async function addcomment(blogid) {
    let {data}=await axios.post(api+`/api/user/${blogid}/addreview`,{comment},{headers:{token:usertoken}})
    if (data.success) {
        toast.success(data.message);
      await getblog()
    }else{
        toast.error(data.message);
        
    }
    setcomment("");
  }

  async function del(revid,blogid) {
    let {data}=await axios.post(api+`/api/user/deletereview`,{revid,blogid},{headers:{token:usertoken}})
    toast.success(data.message);
    await getblog()
    
  }
  return (
    <div className="container eff px-10 mx-auto">
      <div className="bg-gradient-to-l from-blue-200  to-pink-200  via-gray-100 shadow rounded-2xl space-y-5 p-5 ">
        <h2 className="px-4 font-bold text-2xl bg-gradient-to-r from-purple-800 to-blue-400 bg-clip-text text-transparent text-shadow-xs shadow-xl w-fit rounded-2xl mx-auto">
          Comment Section
        </h2>
        <textarea
          onChange={(e) => setcomment(e.target.value)}
          value={comment}
          placeholder="Place your Comment here !"
          className="bg-white border outline-none min-h-20 p-2 mx-auto block w-[60%] border-gray-200 rounded "
          name=""
          id=""
        ></textarea>
        <button onClick={()=> addcomment(blog._id)}
          className=" font-medium px-6 py-2 rounded mx-auto block bg-gradient-to-br from-gray-400 to-gray-200 duration-800
             hover:from-pink-400 hover:to-blue-600 transition-colors  hover:text-white "
        >
          ADD
        </button>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  {
    blog.reviews.map((ele, idx) => (
      <div className="bg-gradient-to-r from-gray-300 to-white duration-500 transition-colors hover:from-white hover:to-gray-300  rounded-2xl px-4 py-2 h-25 overflow-y-auto" key={idx}>
        <div className="font-medium text-lg text-gray-800 flex justify-between">
          <span>@{ele.username} </span>
          <span onClick={()=>del(ele._id,blog._id)} className="font-extrabold cursor-pointer text-gray-700 text-xl">x</span>
           </div>
        <div className="text-gray-600">{ele.comment}</div>
      </div>
    ))
  }
</div>
           
        </div>
      </div>
    
  );
}

export default Review;
