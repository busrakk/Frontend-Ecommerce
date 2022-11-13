
import React from 'react';
import { NavLink } from "react-router-dom";

import logo from "../../src/assets/images/eco-logo.png";


import { 
} from 'react-icons/bi';

import { 
  AiOutlineSearch,
} from 'react-icons/ai';

import {
  RiUserFill,
  RiUserAddFill,
} from 'react-icons/ri';


const Header = () => {

  return (
    <div>
      <div className='container mx-auto xl:px-20 py-8 shadow-lg h-16 md:h-11 flex items-center justify-between md:justify-between'>
              
        <NavLink to='#'>
          <img src={logo} alt="" className='w-8 h-8' />
        </NavLink>

        {/* Search Input */}
        <div className='bg-[var(--second-color)] border-2 rounded-full flex items-center px-2 w-[200px] sm:w-[200px] lg:w-[500px]'>
          <AiOutlineSearch size={25} className='text-bg-gray-600' />
            <input 
              type="text" 
              placeholder="Search products" 
              className='bg-transparent p-2 w-full focus:outline-none'
            />
        </div>

        <nav className='hidden md:flex gap-x-8 text-sm font-semibold'>
          <NavLink to='#' className='flex items-center gap-x-2 transition-all text-opacity-80 hover:text-opacity-100'>
            <RiUserFill size={20} />
            Giriş Yap
          </NavLink>
          <NavLink to='#' className='flex items-center gap-x-2 transition-all text-opacity-80 hover:text-opacity-100'>
            <RiUserAddFill size={20} />
              Kayıt Ol
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header