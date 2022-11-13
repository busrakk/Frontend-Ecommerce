/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Favorite = ({favorite: {id, title, image}}) => {
  return (
    <a href='#' className='hover:scale-105 duration-300 flex flex-col group items-center gap-y-1 text-center p-3 transition hover:bg-sky-50 hover:rounded'>
      <img src={image} alt={title} className='w-36 h-36 rounded-full border border-gray-200' />
      <span className='text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-gray-900 tracking-tighter'>{title}</span>
    </a>
  )
}

export default Favorite
