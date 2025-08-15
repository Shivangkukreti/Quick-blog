import { assets } from "../assets/assets";

function Share() {
    return ( 
        <div className="container eff md:px-25 mx-auto my-10">
            <h2 className="md:text-xl text-lg mb-5 font-medium text-center">Share this page on social media</h2>
            <div className="flex gap-3 w-fit mx-auto ">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.googleplus_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
     );
}

export default Share;