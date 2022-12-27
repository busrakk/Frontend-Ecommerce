/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
// import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const windowWidth = useWindowWidth();

  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    // <div className="flex relative z-20 items-center overflow-hidden">
    //   <div className="container mx-auto px-20 flex relative pt-16">
    //     <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
    //       <span className="w-20 h-2 bg-gray-800 mb-12"></span>
    //       <div className="sm:max-w-lg">
    //         <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    //           Summer styles are finally here
    //         </h1>
    //         <p className="mt-4 text-xl text-gray-500">
    //           This year, our new summer collection will shelter you from the
    //           harsh elements of a world that doesn't care if you live or die.
    //         </p>
    //       </div>
    //       <div className="flex mt-8">
    //       <NavLink to="#" type="button" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</NavLink>
    //       </div>
    //     </div>
    //     <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
    //       {windowWidth >= 780 && (
    //         <Slider {...settings}>
    //           <div>
    //             <img className="w-full h-[500px] object-cover" src={slider1} />
    //           </div>
    //           <div>
    //             <img className="w-full h-[500px] object-cover" src={slider2} />
    //           </div>
    //           <div>
    //             <img className="w-full h-[500px] object-cover" src={slider3} />
    //           </div>
    //         </Slider>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="relative h-auto md:h-[600px] before:bg-gradient-to-r before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
    {windowWidth >= 768 && <Slider {...settings}>
         <div>
             <img className="w-full h-[600px] object-cover" src={slider1} />
         </div>
         <div>
             <img className="w-full h-[600px] object-cover" src={slider2} />
         </div>
         <div>
             <img className="w-full h-[600px] object-cover" src={slider3} />
         </div>
     </Slider>}

     <div className="md:container flex justify-between mt-10 xl:px-20 items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
       <div className="hidden md:block">
       <div className="sm:max-w-lg">
             <h1 className="font text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
               Summer styles are finally here
             </h1>
             <p className="mt-4 text-lg text-gray-300">
               This year, our new summer collection will shelter you from the
               harsh elements of a world that doesn't care if you live or die.
             </p>
           </div>
           <div className="flex mt-10">
           <button className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</button>
           </div>
       </div>
    </div>
 </div>
  );
};

export default HeroSection;
