function Mail() {
    return ( 
        <div className="container eff px-10 my-25 mx-auto flex flex-col items-center gap-3">
            <h2 className="md:text-3xl text-2xl font-medium">Never Miss a Blog!</h2>
            <p className="max-md:text-xs text-gray-600">Subscribe to get the latest blog, new tech, and exclusive news.</p>
            <label className="flex max-w-100 w-[50%] max-sm:w-full  bg-white rounded border border-gray-200 shadow" >
                <input className="w-full outline-none p-2 " type="email" required placeholder="Enter your email" name=""  />
                <button className=" bg-indigo-600 m-1 rounded text-white px-6 max-md:text-xs  flex items-center gap-2 py-2">Subscribe</button>
            </label>
        </div>
     );
}

export default Mail;