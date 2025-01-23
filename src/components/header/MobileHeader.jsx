import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GsapMagnetic } from "../GsapMagnetic";
import { NavLink } from "react-router-dom";

const MobileHeader = ({ togggleheader, settoggleheader }) => {
  const ulRef = useRef(null);
  useEffect(() => {
    const listItems = ulRef.current.querySelectorAll("li");

    listItems.forEach((item) => {
      // Hover In Animation
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.1,
          color: "#ff6347",
          duration: 0.5,
        });
      });

      // Hover Out Animation
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          color: "#ffffff",
          duration: 0.3,
        });
      });
    });
  }, []);
  return (
    <header className="overflow-hidden z-40 transition-all">
      <div
        style={{
          transform: togggleheader ? "translateX(0)" : "translateX(24rem)",
        }}
        className="w-96 h-screen  transform translate-x-96 transition-custom transition-transform  justify-start flex flex-col items-start 
      px-5 py-2 bg-black text-white shadow-custom2  fixed top-0 right-0  z-20"
      >
        <GsapMagnetic>
          <span
            onClick={() => settoggleheader(false)}
            className="absolute top-5 right-5 px-4 py-2 bg-white shadow-custom2 cursor-pointer
          rounded-full font-bold h-16 w-16 flex items-center justify-center text-black"
          >
            close
          </span>
        </GsapMagnetic>
        <ul
          ref={ulRef}
          className="mobile w-full h-5/6 flex flex-col xs:gap-8 md:gap-3 items-start  xs:pt-32 md:pt-20  font-poppins font-light"
        >
          <hr className="w-full text-white h-2 w-full pb-20" />
          <li onClick={() => settoggleheader(false)} className="w-full">
            <NavLink className="text-[2.5em]" to="/">
              Home
            </NavLink>
          </li>
          <li className="w-full" onClick={() => settoggleheader(false)}>
            <NavLink className="text-[2.5em]" to="/about">
              About
            </NavLink>
          </li>
          <li onClick={() => settoggleheader(false)} className="w-full">
            <NavLink className=" text-[2.5em]" to="/work">
              work
            </NavLink>
          </li>
          <li onClick={() => settoggleheader(false)} className="w-full">
            <NavLink className="text-[2.5em]" to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
        <hr className="text-white h-2 w-full" />

        <div className="w-full flex items-center justify-center gap-8">
          <span className="capitalize font-medium -tracking-tighter md:text-sm cursor-pointer hover:translate-x-1 transition-all">
            instagram
          </span>
          <span className="capitalize font-medium -tracking-tighter md:text-sm cursor-pointer hover:translate-x-1 transition-all">
            github
          </span>
          <span className="capitalize font-medium -tracking-tighter md:text-sm cursor-pointer hover:translate-x-1 transition-all">
            linkedin
          </span>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
