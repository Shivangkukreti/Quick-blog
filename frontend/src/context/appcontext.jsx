import {  createContext, useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const Appcontext= createContext()

function Appcontextprovider({children}) {
let api=import.meta.env.VITE_api
let[login,setlogin]=useState(false)
let[ham,setham]=useState(false)
let[allblogs,setallblogs]=useState([])
let[usertoken,setusertoken]=useState(null)
let [search,setsearch]=useState(null)


async function getsearch(search) {
    let {data}=await axios.get(api+'/api/blog/search',{params:{sch:search}})
    try {
        if (data.success) {
        setsearch(data.results)
    }else{
        toast.error(data.message);
        setsearch(allblogs)
        
    } 
    } catch (error) {
        toast.error(error.message);
        
    }
   
}




useEffect(()=>{
    let trytoken=localStorage.getItem('usertoken')
    if (trytoken) {
        setusertoken(trytoken)
    }
},[])

useEffect(()=>{
   async function getallblogs() {
    let {data}=await axios.get(api+'/api/blog/all') 
    if (data.success) {
        setallblogs(data.allblogs)
    }
} 
getallblogs()
},[allblogs])



let value={login,setlogin,api,allblogs,setusertoken,usertoken,ham,setham,getsearch,setsearch,search} 

    return ( 
    <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
     );
}

export default Appcontextprovider;
