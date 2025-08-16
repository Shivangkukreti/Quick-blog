import { useContext, useEffect } from "react";
import { Appcontext } from "../context/appcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Hambur() {
  let { setham, setlogin, usertoken, setusertoken ,ham} = useContext(Appcontext);
  let navi = useNavigate();

  async function logout() {
    setusertoken(null);
    localStorage.removeItem("usertoken");
    toast.error("logged out");
  }

  if (ham) {
    window.scrollTo(0,0)
  }
  useEffect(()=>{
    document.body.style.overflow='hidden'
    return ()=>{
        document.body.style.overflow='unset'
    }
  },[])
  return (
    <div className="absolute sm:hidden  top-0 left-0  bottom-0 right-0 z-20 backdrop-blur-sm flex justify-end items-center">
      <div className="bg-white relative shadow-2xl w-50 h-[100vh] py-10">
        <div
          onClick={() => setham(false)}
          className="absolute top-0 font-extrabold text-gray-700 m-2"
        >
          X
        </div>

        <div  
          onClick={() => {
            setham(false);
            navi("/");  
          }}
          className="text-center cursor-pointer bg-indigo-600 font-medium text-white  mt-5 border-y-1 border-gray-400"
        >
          home
        </div>
        {usertoken ? (
          <>
            <div
              onClick={() => {
                setham(false);
                navi("/admin");
              }}
              className="text-center bg-indigo-600  cursor-pointer font-medium text-white mt-5 border-y-1 border-gray-400"
            >
              Dashboard
            </div>
            <div
              onClick={() => {
                setham(false);
                logout();
              }}
              className="text-center  text-white  cursor-pointer font-medium bg-indigo-600 mt-5 border-y-1 border-gray-400"
            >
              Logout
            </div>
          </>
        ) : (
          <div
            onClick={() => {
              setham(false);
              setlogin(true);
            }}
            className="text-center bg-indigo-600 cursor-pointer font-medium text-white mt-5 border-y-1 border-gray-400"
          >
            login
          </div>
        )}
      </div>
    </div>
  );
}

export default Hambur;
