import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button";
import NavLinks from "./Navlinks";
import { Tr } from 'react-flags-select';

import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineUserAdd,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 z-50 w-full">
      <header class="relative bg-white z-50">
        <div className="flex h-7 items-center justify-end space-x-8 tracking-tighter bg-black px-8 text-[13px] font-light text-white sm:px-10 lg:px-12">
          <div className="font-light">|</div>
          <NavLink
            className="flex text-sm justify-between transition-colors duration-300 transform hover:text-gray-500"
            to="signup"
          >
            <HiOutlineUserAdd size={23} className="font-extralight" />Kayıt Ol
          </NavLink>
          <div className="font-light">|</div>
          <NavLink
            className="flex text-sm justify-between transition-colors duration-300 transform hover:text-gray-500"
            to="login"
          >
            <HiOutlineUser size={23} className="font-extralight" />Oturum Aç
          </NavLink>
          <div className="font-light">|</div>
          <Tr />
        </div>
      </header>
      <div className="flex items-center font-medium shadow-lg justify-around">
        <div className="z-50 p-4 md:w-auto w-full flex justify-between">
          <NavLink to="/">
            <img src="" alt="logo" className="md:cursor-pointer h-7" />
          </NavLink>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden z-50 uppercase text-sm items-center gap-2 font-semibold">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <NavLinks />
        </ul>
        <div className="flex flex-row space-x-4">
        <div class="md:block hidden">
            <NavLink
              class="relative text-black transition-colors duration-300 transform hover:text-gray-500"
              to="#"
            >
              <HiOutlineShoppingBag size={25} />
              <span class="absolute top-[60px] left-38 p-1 text-xs text-white bg-indigo-600 rounded-full"></span>
            </NavLink>
          </div>
          <div class="md:block hidden">
            <NavLink
              class="relative text-black transition-colors duration-300 transform hover:text-gray-500"
              to="#"
            >
              <HiOutlineHeart size={25} />
              <span class="absolute top-[60px] left-38 p-1 text-xs text-white bg-indigo-600 rounded-full"></span>
            </NavLink>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <NavLinks />
          <div className="py-5">{/* <Button /> */}</div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
