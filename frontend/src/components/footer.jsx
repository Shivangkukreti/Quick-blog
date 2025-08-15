import { assets } from "../assets/assets";

function Foot() {
    return ( 
        <div className="px-15  pt-15 pb-5 mx-auto bg-indigo-50">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2">
            <div className="mx-auto max-md:col-span-2">
                <img src={assets.logo} alt="" />
                <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat
                     est adipiscm architecto maiores
                     voluptatem.</p>
            </div>
            <div className="mx-auto mt-5">
                <p className="text-md font-medium my-2">Quick Links</p>
                <ul>
                   <li className="text-gray-600 hover:underline">Home</li>
                <li className="text-gray-600 hover:underline">Best Sellers</li>
                <li className="text-gray-600 hover:underline">Offers & Deals</li>
                <li className="text-gray-600 hover:underline">Contact Us</li> 
                </ul>
                
            </div>
            <div className="mx-auto mt-5">
                <p className="text-md font-medium my-2">Need Help?</p>
                <ul>
                    <li className="text-gray-600 hover:underline">Delivery Information</li>
                <li className="text-gray-600 hover:underline">Return & Refund Policy</li>
                <li className="text-gray-600 hover:underline">Payment Methods</li>
                <li className="text-gray-600 hover:underline">Track your Order</li>  
                </ul>
              
                
            </div>
            <div className="mx-auto mt-5">
                <p className="text-md font-medium my-2">Follow Us</p>
                <ul>
                      <li className="text-gray-600 hover:underline">Instagram</li>
                <li className="text-gray-600 hover:underline">Twitter</li>
                <li className="text-gray-600 hover:underline">Facebook</li>
                <li className="text-gray-600 hover:underline">YouTube</li>  
                </ul>
            
            </div>
            </div>
            <hr className=" border-gray-300 my-2" />
            <p className="text-gray-400 text-center">Copyright 2025 © - All Right Reserved.</p>
        </div>
     );
}

export default Foot;