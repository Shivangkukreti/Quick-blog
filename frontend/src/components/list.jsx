import { useContext } from "react";
import { assets, blog_data } from "../assets/assets";
import { Appcontext } from "../context/appcontext";
import axios from "axios";
import { toast } from "react-toastify";

function Listblog() {
  let{api,allblogs}=useContext(Appcontext)

  async function delblog(id) {
    let {data}=await axios.post(api+`/api/blog/${id}/delete`)
      toast.error(data.message);
   

  }

  async function pubtoggle(id,pub) {  
    if (pub) {
      let {data}=await axios.post(api+`/api/blog/${id}/unpublish`)
      toast.success(data.message);
    }
    if (!pub) {
      let {data}=await axios.post(api+`/api/blog/${id}/publish`)
      toast.success(data.message);
    }
    
  }
  return (
    <div className="md:p-10  p-5 mx-auto">
      <table className="w-full  bg-white rounded-2xl">
        <thead className="text-gray-600">
          <tr>
            <th className="text-start p-3">BLOG TITLE</th>
            <th className="text-center p-3 max-sm:hidden">STATUS</th>
            <th colSpan={2} className="text-center  p-3">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {allblogs.map((blog, idx) => {
            return (
              <tr  key={idx}>
                <td className="p-3  max-md:text-xs border-b border-gray-200">
                  {blog.title}
                </td>
                <td className="p-3 max-sm:hidden text-center max-md:text-xs  border-b border-gray-200">
                  <span
                    className={
                      (blog.publish
                        ? "text-green-700 font-medium "
                        : "text-red-700 font-medium ")+" cursor-pointer"
                    }
                  >
                    {blog.publish ? "Published" : "Unpublished"}
                  </span>
                </td>
                <td className="p-3 text-center  max-md:text-xs border-b border-gray-200 ">
                    
                       <span onClick={()=>pubtoggle(blog._id,blog.publish)}
                    className={
                     ( !blog.publish
                        ? "text-green-700 font-medium rounded px-2 py-1  border-transparent border hover:border-green-700"
                        : "text-red-700 font-medium rounded px-2 py-1  border-transparent border hover:border-red-700") + " cursor-pointer max-sm:text-xs"
                    }
                  >
                    {blog.publish ? "Unpublish" : "Publish"}
                  </span>
                  </td>
                  <td className="p-3   max-md:text-xs border-b border-gray-200 ">
                  <span onClick={()=>delblog(blog._id)} className="cursor-pointer  ">
                    <img className="min-w-5" src={assets.cross_icon} alt="" />
                  </span> 
             
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Listblog;
