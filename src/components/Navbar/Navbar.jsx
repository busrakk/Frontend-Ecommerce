import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button";
import NavLinks from "./Navlinks";

import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
} from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white fixed top-0 z-50 w-full">
      <div className="flex items-center font-medium shadow-2xl justify-around">
        <div className="z-50 p-4 md:w-auto w-full flex justify-between">
          <img src="" alt="logo" className="md:cursor-pointer h-9" />
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
          <div className="md:block hidden">
            <HiOutlineShoppingBag size={25} />
          </div>
          <div className="md:block hidden">
            <HiOutlineHeart size={25} />
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
          <div className="py-5">
            {/* <Button /> */}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
