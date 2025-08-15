import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import { useContext, useEffect } from "react";
import { Appcontext } from "./context/appcontext";
import Login from "./components/login";
import Admin from "./pages/admin";
import Dash from "./components/dash";
import Addblog from "./components/add";
import Listblog from "./components/list";
import Notfound from "./components/notfound";
import Hambur from "./components/hambur";
import { ToastContainer } from "react-toastify";
function App() {
let {login,ham}=useContext(Appcontext)
useEffect(()=>window.scrollTo(0,0),[])
  return (
    <>
    <ToastContainer></ToastContainer>
    {login && <Login></Login>}
    {ham && <Hambur></Hambur>}
    <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/blog/:id" element={<Blog></Blog>} />
    <Route path="/admin" element={<Admin></Admin>} >
    <Route  path="dashboard" element={<Dash></Dash>} />
    <Route path="addblogs" element={<Addblog></Addblog>} />
    <Route path="listblogs" element={<Listblog></Listblog>} />
   
    </Route>
 <Route path="*" element={<Notfound></Notfound>} />
   </Routes>
    </>
   
  )
}

export default App
