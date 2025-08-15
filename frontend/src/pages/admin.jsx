import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Nav from "../components/navbar";
import { useEffect } from "react";

function Admin() {
    let navi=useNavigate()
    useEffect(()=>{
        navi('/admin/dashboard')
    },[])

useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "unset";
  };
}, []);

    return ( 
        <>
        <Nav></Nav>
        <div className="flex  ">
        <div className="h-[100vh] border-r shrink-0 w-fit border-gray-200 shadow-xl z-0">
            
            <NavLink className={({isActive})=>(isActive? "bg-blue-100 border-r-4 border-blue-700 ":"" )+(" flex items-center  p-5  gap-2")} to={'/admin/dashboard'}>
               
                <img className="w-7 " src={assets.home_icon} alt="" />
                <span className="max-md:hidden">Dashboard</span>
            </NavLink>
            
            <NavLink  className={({isActive})=>(isActive? "bg-blue-100 border-r-4 border-blue-700 ":"" )+(" flex items-center  p-5  gap-2")} to={'/admin/addblogs'}>
            
                <img className="w-7" src={assets.add_icon} alt="" />
                <span className="max-md:hidden">Add Blogs</span>
           
            </NavLink>
            
            <NavLink className={({isActive})=>(isActive? "bg-blue-100 border-r-4 border-blue-700 ":"" )+(" flex items-center  p-5  gap-2")} to={'/admin/listblogs'}>
            
                <img className="w-7" src={assets.list_icon} alt="" />
                <span className="max-md:hidden">Blog list</span>
           
            </NavLink>
            
        </div>
        <div className="bg-blue-50 w-full h-[100vh] overflow-y-scroll">
            <Outlet/>
        </div>
        </div>
        </>
        
     );
}

export default Admin;