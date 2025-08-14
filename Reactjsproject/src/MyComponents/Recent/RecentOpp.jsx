import React from "react";
import image1 from "../../assets/flipkart.webp";
import image2 from "../../assets/google.webp";
import image3 from "../../assets/isro.webp";
import image4 from "../../assets/amazon.webp";
import image5 from "../../assets/hp.jpeg";
import image6 from "../../assets/moto.jpg";
import image7 from "../../assets/nestle.png";
import image8 from "../../assets/paypal.png";
import image9 from "../../assets/raz.webp";
import image10 from "../../assets/tata.jpeg";
import Button from "../Apply/button";
 
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
    img: image5,
    comapny: "HP",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Delhi",
    aosDelay: "200",
  },

  {
    id: 6,
    img: image6,
    comapny: "Motorola",
    Role: "UI Designer",
    Designation: "Designer",
    Stipend: "5k-8k",
    Location: "Banglore",
    aosDelay: "200",
  },

  {
    id: 7,
    img: image7,
    comapny: "Nestle",
    Role: "Account Manger",
    Designation: "Job",
    Stipend: "50k-80k",
    Location: "Kolkata",
    aosDelay: "200",
  },
  {
    id: 8,
    img: image8,
    comapny: "PayPal",
    Role: "Frontend Developer",
    Designation: "Intern",
    Stipend: "5k-8k",
    Location: "Mumbai",
    aosDelay: "200",
  },
  {
    id: 9,
    img: image9,
    comapny: "RazorPay",
    Role: "Backend Developer",
    Designation: "job",
    Stipend: "50k-80k",
    Location: "Banglore",
    aosDelay: "200",
  },
  {
    id: 10,
    img: image10,
    comapny: "Tata",
    Role: "Manager",
    Designation: "job",
    Stipend: "50k-80k",
    Location: "Tata",
    aosDelay: "200",
  },
];

const RecentOpp = () => {
  return (

 <div className="bg-gradient-to-r from-blue-800 to-purple-500 dark:from-blue-900 dark:to-purple-900 min-h-screen p-6">
 {/* card grid  */}
           
       <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center ">


      {RecentOppData.map((data) => (
        <div 
        data-aos="fade-up"
        data-aos-delay={data.aosDelay}
        className="bg-gradient-to-b from-blue-800 to-purple-700 hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl transition duration-200 text-white font-semibold rounded-2xl overflow-hidden w-full max-w-xs "
         key={data.id}>

          <img src={data.img} alt=""  className="w-full h-48 object-cover"/>
          <div className="p-4 space-y-2">
            <div className="">
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{data.Role}</p>
               <p className="text-sm sm:text-base md:text-lg text-gray-200">{data.Designation}</p>
              <p className="  text-sm sm:text-base md:text-lg text-gray-300 ">{data.Location}</p>
              <p className="  text-sm sm:text-base md:text-lg text-gray-300">{data.Stipend}</p>{" "}
              <button className="mt-2 bg-gradient-to-r from-blue-300 to-blue-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full w-full">
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
       {/* view all buttons  */}
 <div className="flex justify-center mt-10 ">
 <button className='text-lg sm:text-xl bg-blue-600 text-white py-3 px-6 rounded hover:scale-105 duration-200 hover:bg-blue-500' >View All</button>
             </div>

      </div>
  );
};

export default RecentOpp;
