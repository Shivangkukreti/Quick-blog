import { useContext } from "react";
import { assets } from "../assets/assets";
import { Appcontext } from "../context/appcontext";

function Dash() {
    let {allblogs}=useContext(Appcontext)

    let sum=0
    allblogs.forEach(ele => {
        sum+=ele.reviews.length
    });

    return ( 
        <div className=" max-md:p-5 p-10 flex flex-wrap mx-auto">

            <div className="flex m-5 bg-white rounded-2xl w-50 p-5 gap-5">
                <img className='w-15'  src={assets.dashboard_icon_1} alt="" />
                <div>
                    <div className="font-bold text-2xl text-gray-700">{allblogs.length}</div>
                    <div className="text-gray-600">Blogs</div>
                </div>
            </div>
            
              <div className="flex m-5 bg-white rounded-2xl w-50 p-5 gap-5">
                <img className='w-15'  src={assets.dashboard_icon_2} alt="" />
                <div>
                    <div className="font-bold text-2xl text-gray-700">{sum}</div>
                    <div className="text-gray-600">Comments</div>
                </div>
            </div>

            <div className="flex m-5 bg-white rounded-2xl w-50 p-5 gap-5">
                <img className='w-15'  src={assets.dashboard_icon_3} alt="" />
                <div>
                    <div className="font-bold text-2xl text-gray-700">0</div>
                    <div className="text-gray-600">Drafts</div>
                </div>
            </div>

            
            <div className="flex m-5 bg-white rounded-2xl w-50 p-5 gap-5">
                <img className='w-15'  src={assets.dashboard_icon_4} alt="" />
                <div>
                    <div className="font-bold text-2xl text-gray-700">{allblogs.filter(ele=>ele.publish).length}</div>
                    <div className="text-gray-600">Published</div>
                </div>
            </div>

            <div className="flex m-5 bg-white rounded-2xl w-50 p-5 gap-5">
                <img  className='w-15' src={assets.dashboard_icon_4} alt="" />
                <div>
                    <div className="font-bold text-2xl text-gray-700">{allblogs.filter(ele=>!ele.publish).length}</div>
                    <div className="text-gray-600">Unpublished</div>
                </div>
            </div>
        </div>
     );
}

export default Dash;