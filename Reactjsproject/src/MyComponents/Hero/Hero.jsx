import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/flipkart.webp";
import image2 from "../../assets/google.webp";
import image3 from "../../assets/isro.webp";
import image4 from "../../assets/amazon.webp";
import Button from "../Apply/button";
const HeroSlide = [
  {
    id: 1,
    img: image1,
    subtitle: "Internship",
    Role: "WebDeveloper",
    Company: "Flipkart",
  },

  {
    id: 2,
    img: image2,
    subtitle: "Internship",
    Role: "WebDeveloper",
    Company: "Goggle",
  },

  {
    id: 3,
    img: image3,
    subtitle: "Internship",
    Role: "WebDeveloper",
    Company: " Isro",
  },

  {
    id: 4,
    img: image4,
    subtitle: "Internship",
    Role: "WebDeveloper",
    Company: "Amazon",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 2000,

    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div  id="hero" className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gradient-to-r from-blue-800 to-purple-500 flex justify-center items-center dark:from-blue-900 dark:to-purple-900 dark:bg-gradient-to-l duration-200">
      
      {/* background pattern  */}

      <div className="h-[700px] w-[700px] bg-gradient-to-t from-blue-800 to-purple-500  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>


     

      {/* hero section  */}


      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {HeroSlide.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                {/* text content secion  */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"

                  className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                     
                    {data.Role}
                  </h1>

                  <h2 className="text-2xl sm:text-4xl  lg:text-2xl font-bold">
                    {data.subtitle}
                  </h2>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl dark:text-white/50  font-bold"></h2>
                  

                  <p  
                  data-aos=" fade-up"
                  data-aos-duration="300"
                  data-aos-delay="100"
                  className="text-5xl font-bold">
                     {data.Company}</p>

                  <div  
                   data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300">
                    <button className="bg-gradient-to-r from-blue-300 to-blue-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* image section  */}

                <div className="order-1 sm:order-2 ">
                  <div 
                   data-aos="zoom-in"
                  
                  data-aos-once="true"
                  className=" relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] lg:scale-120 sm:scale-105 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

 

export default Hero;
