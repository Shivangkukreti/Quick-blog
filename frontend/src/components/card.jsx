import { useNavigate } from "react-router-dom";

function Card({image,sub,title,category,id}) {
    let navi=useNavigate()
    return ( 
        <div onClick={()=>navi(`/blog/${id}`)} className="flex eff flex-col border shadow rounded-xl duration-300 hover:shadow-indigo-300 hover:scale-103 overflow-hidden h-full border-gray-200">
            <div>
              <img className=""  src={image} alt="" />  
            </div>
            <div className="sm:p-4 p-2 space-y-2">
                <span className="text-sm text-indigo-600 block gap-2 px-3 py-1 
             rounded-4xl  w-fit max-md:text-xs bg-indigo-100"> {category}</span>
                <h2 className="font-medium max-sm:text-xs "> {title} </h2>
                <p dangerouslySetInnerHTML={{'__html':sub}} className="text-xs text-gray-500 max-sm:hidden"></p>
            </div>


        </div>
     );
}

export default Card;