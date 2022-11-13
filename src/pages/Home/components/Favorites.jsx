import React, { useState, useEffect } from 'react'

import Favorite from '../../Home/UI/Favorite';
import favoritesData from '../../../api/favorites.json';
import Title from '../../../components/UI/Title';

const Favorites = () => {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    // istek
    setFavorites(favoritesData)
  }, [])

  return (
    <div className='py-4'>
        <Title>Favoriler</Title>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
          {
            !favorites.length && 'Yükleniyor.. '
          }
          {
            favorites && favorites.map((favorite, index) => 
            <Favorite key={index} favorite={favorite} />)
          }
        </div>
    </div>
  )
}

export default Favorites