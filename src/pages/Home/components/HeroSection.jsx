/* eslint-disable jsx-a11y/alt-text */

import React from "react";

import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size";

import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";


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
    <div className="flex flex-row">
      <div className="ml-auto max-w-lg h-auto bg-gradient-to-r from-sky-200 to-[#e8e7de] flex flex-col md:flex-row justify-between items-center md:h-[500px] w-1/2 xs:w-full sm:w-full">
        <div className="sm:my-40 sm:mx-10 sm:max-w-2xl">
          <div className="px-3 font-sans uppercase font-bold from-neutral-900 text-xl tracking-tight text-gray-900">
            Milyonlarca Ürünü Keşfetmenin{" "}
            <div className="text-6xl pt-4"> TAM ZAMANI..</div>
          </div>
          <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center">
            <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Şimdi Keşfedin
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto md:h-[500px] w-2/3">
        {windowWidth >= 640 && (
          <Slider {...settings}>
            <div>
              <img className="w-full h-[500px] object-cover" src={slider1} />
            </div>
            <div>
              <img className="w-full h-[500px] object-cover" src={slider2} />
            </div>
            <div>
              <img className="w-full h-[500px] object-cover" src={slider3} />
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
