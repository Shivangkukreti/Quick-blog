import { useEffect } from "react";
import Catalog from "../components/catalog";
import Foot from "../components/footer";
import Hero from "../components/hero";
import Mail from "../components/mail";
import Nav from "../components/navbar";
import Share from "../components/share";

function Home() {
  useEffect(()=>{
    if(window.history.scrollRestoration){
      window.history.scrollRestoration='manual'
    }
    window.scrollTo(0,0)},[])
    return ( 
       <>
       <Nav></Nav>
       <Hero></Hero>
       <Catalog></Catalog>
       <Mail></Mail>
       <Share></Share>
       <Foot></Foot>
       </>
     );
}

export default Home;