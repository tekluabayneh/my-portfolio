import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GsapMagnetic } from "../GsapMagnetic";
import { Link, NavLink } from "react-router-dom";

const MobileHeader = ({ togggleheader, settoggleheader }) => {
  const ulRef = useRef(null);

  return (
    <header className="overflow-hidden z-40 transition-all">
      <div
        style={{
          transform: togggleheader ? "translateX(0)" : "translateX(304rem)",
        }}
        className="w-[90%] md2:w-[80%] md:w-96 h-screen  transform translate-x-[34rem] transition-custom transition-transform  justify-start flex flex-col items-start 
      px-5 py-2 bg-black text-white shadow-custom2  fixed top-0 right-0  z-20"
      >
        <GsapMagnetic>
          <span
            onClick={() => settoggleheader(false)}
            className="absolute top-2 right-5 px-4 py-2 bg-white shadow-custom2 cursor-pointer
          rounded-full font-bold h-16 w-16 flex items-center justify-center text-black"
          >
            close
          </span>
        </GsapMagnetic>
        <ul
          ref={ulRef}
          className="mobile w-full h-5/6 flex flex-col gap-12 items-start    font-poppins font-light"
        >
          <hr className="w-full text-white h-2 w-full pb-20" />
          <li onClick={() => settoggleheader(false)} className="w-full">
            <NavLink
              className="text-3xl md2:text-5xl hover:animate-pulse hover:text-blue-50"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="w-full h-8" onClick={() => settoggleheader(false)}>
            <NavLink
              className="text-3xl md2:text-5xl hover:animate-pulse hover:text-blue-50"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li onClick={() => settoggleheader(false)} className="w-full">
            <NavLink
              className="text-3xl md2:text-5xl hover:animate-pulse hover:text-blue-50 "
              to="/work"
            >
              work
            </NavLink>
          </li>
          <li onClick={() => settoggleheader(false)} className="w-full">
            <NavLink
              className="text-3xl md2:text-5xl hover:animate-pulse hover:text-blue-50"
              to="/contact"
            >
              contact
            </NavLink>
          </li>
        </ul>
        <hr className="text-white h-2 w-full" />

        <div className="w-full flex items-center justify-center gap-8">
          <span className="capitalize font-medium -tracking-tighter text-sm cursor-pointer hover:translate-x-1 transition-all">
            instagram
          </span>
          <span className="capitalize font-medium -tracking-tighter text-sm cursor-pointer hover:translate-x-1 transition-all">
            <Link to={"https://github.com/tekluabayneh"} target="_blank">
              github
            </Link>
          </span>
          <span className="capitalize font-medium -tracking-tighter text-sm cursor-pointer hover:translate-x-1 transition-all">
            <Link
              to={"https://www.linkedin.com/in/teklu-abayneh"}
              target="_blank"
            >
              linkedin
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
