import React from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
 
import DarkMode from "./DarkMode"; // correct path because Navbar.jsx and DarkMode.jsx are in the same folder



const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#Hero",
  },
  {
    id: 2,
    name: "Opportunity",
    link: "/#RecentOpp",
  },
];

const Navbar = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const handleLocationSelect = (option) => {
    setSelectedLocation(option);
    setLocationOpen(false);
  };

  return (
    <div className="shadow-lg bg-gradient-to-r from-blue-800 to-purple-700 text-white dark:bg-blue-900 dark:text-white duration-200 flex flex-wrap items-center justify-between p-4 bg-blue-600  ">
      <div className=" container mx-auto flex flex-wrap   p-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Left Section: Location Selector + Search */}
          <div className="flex flex-col items-start gap-2">
            {/* Location Selector */}
            <div className="relative">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="flex items-center gap-2 text-black bg-white/10 backdrop-blur-md px-3 py-2 rounded-md border border-white/30 hover:bg-blue-600 hover:text-white transition"
              >
                <CiLocationOn className="text-xl" />
                {selectedLocation}
                <FaCaretDown
                  className={`transition-transform ${
                    locationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {locationOpen && (
                <div className="absolute mt-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-white/30 rounded-lg shadow w-full z-50">
                  <button
                    onClick={() => handleLocationSelect("Across Globe")}
                    className={`block w-full text-left px-4 py-2 bg-transparent text-black hover:bg-blue-600 hover:text-white ${
                      selectedLocation === "Across Globe"
                        ? "bg-blue-600 text-white font-semibold"
                        : ""
                    }`}
                  >
                    🌐 Across Globe
                  </button>
                  <button
                    onClick={() => handleLocationSelect("Across Nation")}
                    className={`block w-full text-left px-4 py-2 bg-transparent text-black hover:bg-blue-600 hover:text-white ${
                      selectedLocation === "Across Nation"
                        ? "bg-blue-600 text-white font-semibold"
                        : ""
                    }`}
                  >
                    🏳️ Across Nation
                  </button>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative w-[350px] h-[50px]">
              <span className="absolute inset-y-2 right-0 pr-3  py-4 text-lg sm:text-3xl flex items-center text-blue-500">
                <IoSearch />
              </span>
              <input
                type="text"
                placeholder="Search opportunities..."
                className="mt-2 px-4 py-2 rounded-md border border-gray-300 text-sm w-[350px] h-[50px] text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

         
              
          <div className="flex items-center justify-between gap-5">
          
            <ul className="flex item-center gap-4  sm:flex">
             {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="text-lg sm:text-xl font-medium hover:text-2xl hover:text-blue-900 duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {/* dropdown section */}
              <li className="group relative cursor-pointer">
                <a
                  href="/#"
                  className="flex items-center gap-[2px] text-lg sm:text-xl font-medium"
                >
                  Quick links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
              </li>

              

              {/* dropdown link section */}
               
              
            </ul>
            </div>
            <button 
            className="btn btn-primary  bg-gradient-to-r from-primaryBlue to-secondary text-white px-4 p-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
              LogIn

            </button>


             <button 
            className="btn btn-primary  bg-gradient-to-r from-primaryBlue to-secondary text-white px-4 p-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300 ">
              SignIn

            </button>
    
            <div>
             <DarkMode/>
            </div>
            <ul>
            <li className="ml-auto">
                <a href="#" className="flex h-[72px] items-center">
                  <IoNotifications className="text-4xl cursor-pointer" />
                </a>
              </li>
              </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
