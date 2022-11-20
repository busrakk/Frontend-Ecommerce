import React from 'react';
import Helmet from '../../components/Helmet/index';
import AllCategories from './components/AllCategories';
import Advertisement from './components/Advertisement';
import HeroSection from './components/HeroSection';
import Favorites from './components/Favorites';
import Campaigns from './components/Campaigns';


const Home = () => {
  return (
    <Helmet title={"Anasayfa"}>
      <AllCategories />
      <HeroSection /> 
      <Advertisement />
      <Campaigns />
      <div className='container mx-auto xl:px-40 grid gap-y-6 pt-8'>
        <Favorites />
      </div>
    </Helmet>
  )
}

export default Home
