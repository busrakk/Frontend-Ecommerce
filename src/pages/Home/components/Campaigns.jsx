/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Slider from 'react-slick';
// import Banners from '../../../api/banners.json';
import Title from '../../../components/UI/Title';

import img1 from "../../../assets/images/campaigns1.jpg";
import img2 from "../../../assets/images/campaigns2.jpg";
import img3 from "../../../assets/images/campaigns3.jpg";
import img4 from "../../../assets/images/campaigns4.jpg";


import { 
  IoIosArrowBack, 
  IoIosArrowForward 
} from 'react-icons/io';

function NextBtn({ className, style, onClick }) {
  return (
      <button 
        className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} 
        onClick={onClick}
      >
        <IoIosArrowForward size={22} />
      </button>
  )
}

function PrevBtn({ className, style, onClick }) {
  return (
      <button 
        className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} 
        onClick={onClick}
      >
        <IoIosArrowBack size={22} />
      </button>
  )
}

const Campaigns = () => {

//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     setBanners(Banners);
//   }, [])

  const settings = {
    dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
          {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            arrows: false,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }
        ]
  };

  return (
    <div className='container mx-auto xl:px-40 md:pt-8' >
      <div className='hidden md:block'>
        <Title>Kampanyalar</Title>
      </div>
      <Slider className='md:-mx-2' {...settings}>
        {/* {banners.length && banners.map((banner, index) => (
          <div key={banner.id}>
            <picture className='block px-2'>
              <img src={banner.image} className='md:rounded-lg' />
            </picture>
          </div>
        ))} */}
        <div>
          <img className="w-[400px] h-[200px] object-cover" src={img1} />
        </div>
        <div>
          <img className="w-[400px] h-[200px] object-cover" src={img2} />
        </div>
        <div>
          <img className="w-[400px] h-[200px] object-cover" src={img3} />
        </div>
        <div>
          <img className="w-[400px] h-[200px] object-cover" src={img4} />
        </div>
      </Slider>
    </div>
  )
}

export default Campaigns
