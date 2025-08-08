 import React from 'react';
 import 'react-multi-carousel/lib/styles.css';
 import Navbar from './MyComponents/Navbar';
 import Hero from './MyComponents/Hero/Hero';
 import AOS from 'aos';
import RecentOpp from './MyComponents/Recent/RecentOpp';
 import "aos/dist/aos.css";
import Opportunity from './MyComponents/Oppurtunity/CategoryCard';
import Footer from './MyComponents/Footer/Footer';
import CategoryCard from './MyComponents/Oppurtunity/CategoryCard';
 

 

 const App = () => {
   
  React.useEffect(()=> {
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);


   return (
     <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
       <Navbar/>
         <Hero/>
          
          <Opportunity/>
         <RecentOpp/>
         <Footer/>
         
     </div>

     
   );
 }
 
 export default App;
 