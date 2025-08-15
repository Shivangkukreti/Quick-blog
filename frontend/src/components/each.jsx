import { assets } from "../assets/assets";
import Review from "./review";

function Each({blog}) {
  return (
    <div className="container mt-20   mx-auto px-5 md:px-20 flex flex-col items-center gap-7    ">
      <img
        src={assets.gradientBackground}
        className="absolute max-sm:h-100 top-0 md:-top-30 -z-1 "
        alt=""
      />
       <h2 className="font-medium text-gray-900 text-4xl max-md:text-3xl  text-center "> {blog.title} </h2>
            <p className="text-gray-500 text-2xl max-md:text-xl text-center"> {blog.subtitle} </p>
            <span className="text-indigo-600 flex items-center gap-2 px-4 py-2 
            border rounded-4xl border-indigo-700 w-fit max-md:text-xs bg-indigo-100">{blog.category}
            <img className="animate-bounce h-5" src={assets.star_icon} alt="" />
            </span>
            <div className="overflow-hidden my-5 rounded-2xl ">
                <img className="max-h-140 eff" src={blog.image} alt="" />
            </div>
            <div  className="my-20" dangerouslySetInnerHTML={{__html: blog.desc}}></div>
    </div>
  );
}

export default Each;
