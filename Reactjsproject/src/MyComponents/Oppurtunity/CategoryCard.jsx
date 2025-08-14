import React from "react";
import bg from "../../assets/back.jpg";
import { Category } from "../Category/Category";

import AOS from "aos";
import DarkMode from "../DarkMode";
function CategoryCard() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900  py-10 px-4 ">

{/* Section Title at Top */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center items-center mb-10 gap-4 text-blue-900 dark:text-white text-center"
      >
       Categories
      </div>

      {/* Categories Grid */}

      <div className="Opp-bg justify-center mt-20px bg:blue-200"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center mb-10 ">
        {Category.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="category-card flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition duration-200 cursor-pointer   "
          >
            <img
              src={item.img}
              alt=""
              className="w-20 h-20 object-contain mb-2"
            />
            <span className="text-sm sm:text-base md:text-lg font-semibold text-blue-900 dark:text-black">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        aos-delay="100"
        className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center items-center mb-6 gap-4 text-blue-900 dark:text-white text-center "
      >
        Top Opportunities
      </div>
    </div>
  );
}

export default CategoryCard;
