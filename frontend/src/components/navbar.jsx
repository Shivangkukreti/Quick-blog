import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Appcontext } from "../context/appcontext";
import { useNavigate } from "react-router-dom";
import Hambur from "./hambur";
import { toast } from "react-toastify";

function Nav() {
  let { login, setlogin, usertoken ,setusertoken,ham,setham} = useContext(Appcontext);
  let navi = useNavigate();
  



  async function logout() {
    setusertoken(null)
    localStorage.removeItem('usertoken')
    toast.error('logged out');
    
  }

  return (
    <div className="sticky top-0  bg-white z-10  shadow  ">
      <div className="container md:px-25 px-10 mx-auto z-1  flex justify-between">
        <div onClick={() => navi("/")} className="my-4 flex items-center">
          <img className="max-sm:w-30" src={assets.logo} alt="" />
        </div>
        <div onClick={()=>setham(true)} className="my-auto font-extrabold text-xl cursor-pointer   sm:hidden">
          &#8801;
        </div>
        <div className="max-sm:hidden">
          {usertoken ? (
            <div className="flex items-center gap-3">
             <span onClick={()=>navi('/admin')} className="font-bold text-gray-600 max-sm:text-xs cursor-pointer">
            Dashboard
            </span>
            
            <button
              onClick={logout}
              className=" bg-indigo-600 max-sm:text-xs rounded-3xl text-white px-2 sm:px-6 my-4  flex items-center gap-2 py-2"
            >
              Logout <img src={assets.arrow} alt="" />
            </button>
            
            </div >
           
          ) : (
            <button
              onClick={() => setlogin(true)}
              className=" bg-indigo-600 max-sm:text-xs rounded-3xl text-white  px-3 sm:px-6 my-4  flex items-center gap-2 py-2"
            >
              Login <img src={assets.arrow} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
