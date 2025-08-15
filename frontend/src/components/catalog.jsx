import { useState } from "react";
import { assets, blog_data } from "../assets/assets";
import Card from "./card";
import { useContext } from "react";
import { Appcontext } from "../context/appcontext";

function Catalog() {
  let [category, setcat] = useState("All");
  let { allblogs ,search} = useContext(Appcontext);

  return (
    <div className="container  mx-auto px-5 md:px-20">
      <div className="flex cursor-pointer  mx-auto my-10  text-gray-500 font-medium  max-md:text-xs items-center justify-between w-[50%] max-sm:w-[100%]">
        <span
          className={
            category == "All"
              ? "bg-indigo-600 text-white rounded-2xl px-4 py-1"
              : ""
          }
          onClick={() => setcat("All")}
        >
          All
        </span>
        <span
          className={
            category == "Technology"
              ? "bg-indigo-600 text-white rounded-2xl px-4 py-1"
              : ""
          }
          onClick={() => setcat("Technology")}
        >
          Technology
        </span>
        <span
          className={
            category == "Startup"
              ? "bg-indigo-600 text-white rounded-2xl px-4 py-1"
              : ""
          }
          onClick={() => setcat("Startup")}
        >
          Startup
        </span>
        <span
          className={
            category == "Lifestyle"
              ? "bg-indigo-600 text-white rounded-2xl px-4  py-1"
              : ""
          }
          onClick={() => setcat("Lifestyle")}
        >
          Lifestyle
        </span>
        <span
          className={
            category == "Finance"
              ? "bg-indigo-600 text-white rounded-2xl px-4 my-auto py-1"
              : ""
          }
          onClick={() => setcat("Finance")}
        >
          Finance
        </span>
      </div>
      <div className="grid max-sm:grid-cols-2 grid-cols-3 lg:grid-cols-4 ">
        {search
          ? search.map((blog, idx) => {
              return (
                <div key={idx} className="sm:p-4 p-2 ">
                  <Card
                    id={blog._id}
                    category={blog.category}
                    sub={blog.subTitle}
                    image={blog.image}
                    title={blog.title}
                  />
                </div>
              );
            })
          : allblogs
              .filter(
                (ele) =>
                  (ele.category == category || category == "All") && ele.publish
              )
              .map((blog, idx) => {
                return (
                  <div key={idx} className="sm:p-4 p-2 ">
                    <Card
                      id={blog._id}
                      category={blog.category}
                      sub={blog.subTitle}
                      image={blog.image}
                      title={blog.title}
                    />
                  </div>
                );
              })}
      </div>
    </div>
  );
}

export default Catalog;
