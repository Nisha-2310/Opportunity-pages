import React from "react";
import image1 from "../../assets/flipkart.webp";
import image2 from "../../assets/google.webp";
import image3 from "../../assets/isro.webp";
import image4 from "../../assets/amazon.webp";
import Button from "../Apply/button";
import "./RecentOpp.css";
 import AOS from 'aos';

const RecentOppData = [
  {
    id: 1,
    img: image1,
    comapny: "Flikart",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },

  {
    id: 2,
    img: image4,
    comapny: "Amazon",
    Role: "Backend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Delhi",
    aosDelay: "200",
  },

  {
    id: 3,
    img: image2,
    comapny: "Goggle",
    Role: "UI/UX Designer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Mumbai",
    aosDelay: "200",
  },

  {
    id: 4,
    img: image3,
    comapny: "ISRO",
    Role: " Aerospace engineer",
    Designation: "job",
    Stipend: "50k-80k",
    Location: "Banglore",
    aosDelay: "200",
  },

  {
    id: 5,
    img: image1,
    comapny: "Flikart",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },

  {
    id: 6,
    img: image2,
    comapny: "Flikart",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },

  {
    id: 5,
    img: image1,
    comapny: "Flikart",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },
  {
    id: 5,
    img: image1,
    comapny: "Flikart",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },
  {
    id: 5,
    img: image1,
    comapny: "Flikart",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },
  {
    id: 5,
    img: image1,
    comapny: "Flikart",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },
];

const RecentOpp = () => {
  return (

 <div>

           
       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5    bg-gradient-to-r from-blue-800 to-purple-800 hover:backdrop-blur-md">

 
      {RecentOppData.map((data) => (
        <div 
        data-aos="fade-up"
        data-aos-delay={data.aosDelay}
        className="Opportunity space-y-3 bg-gradient-to-b from-purple-600 to-blue-700 hover:bg-blue-300 hover:scale-115 hover:shadow-lg text-white font-semibold py-2 px-4 rounded   transition-all duration-200  " key={data.id}>
          <img src={data.img} alt="" />
          <div className="opp-details">
            <div className="">
              <p className="text-4xl font-bold">{data.Role}</p>
               <p className="text-2xl font-bold">{data.Designation}</p>
              <p className="  text-gray-600 text-2xl ">{data.Location}</p>
              <p className="  text-gray-600 text-2xl ">{data.Stipend}</p>{" "}
              <button className="bg-gradient-to-r from-blue-300 to-blue-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
       {/* view all buttons  */}
 <div className="flex justify-center ">
 <button className='text-2xl text-center mt-10 mb-10 cursor-pointer bg-blue-600 text-white py-3 px-5 hover:scale-105 duration-200  rounded-3xl hover:bg-blue-300 ' >View All</button>
             </div>

      </div>
  );
};

export default RecentOpp;
