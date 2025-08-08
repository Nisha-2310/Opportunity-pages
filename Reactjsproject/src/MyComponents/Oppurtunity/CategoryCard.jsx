import React from 'react';
import bg from "../../assets/back.jpg";
import { Category } from '../Category/Category';
 import './CategoryCard.css'; 
import AOS from 'aos';
import DarkMode from '../DarkMode';
 function CategoryCard()
 {
  return (
    
    <div className="Home bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-blue-900   ">  
      <div className="Opp-bg justify-center mt-20px bg:blue-200"> 
    </div>
<div className='flex justify-center gap-5 text-3xl font-semibold cursor-pointer text-blue-800  '>
      {Category.slice(0,6).map((item)=> (
     <div className="category-card">
      <img src={item.img} alt=''/>
      <span>{item.name}</span>
     </div>
      ))}
    </div>
    <div
     data-aos="fade-up"
       aos-delay="100"
    className=" text-5xl font-bold flex justify-center items-center mb-6 gap-4 text-blue-900 ">Top Opportunities</div>
    </div>
   
  )
 }

export default CategoryCard
