import React from 'react'
import AllCategories from './components/AllCategories';
import Advertisement from './components/Advertisement';
import HeroSection from './components/HeroSection';
import Favorites from './components/Favorites';
import Campaigns from './components/Campaigns';


const Home = () => {
  return (
    <>
      <AllCategories />
      <HeroSection /> 
      <Advertisement />
      <Campaigns />
      <div className='container mx-auto xl:px-40 grid gap-y-6 pt-8'>
        <Favorites />
      </div>
    </>
  )
}

export default Home
