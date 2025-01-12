import React, { useEffect, useRef } from "react";
import useWindowWidth from "../../utils/windowWidth";
import MobileHeader from "./MobileHeader";
const Mainheader = () => {
  const width = useWindowWidth();
  const menuRef = useRef(null);

  const handelScroll = () => {
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;

      scrollTop > 300
        ? (() => {
            menuRef.current.classList.contains("hidden") &&
              menuRef.current.classList.remove("hidden");
            menuRef.current.classList.add("fixed");
          })()
        : (() => {
            menuRef.current.classList.contains("fixed") &&
              menuRef.current.classList.remove("fixed");
            menuRef.current.classList.add("hidden");
          })();
    });
  };
  useEffect(() => {
    handelScroll();
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <header className="w-full py-2 flex justify-between items-center px-5">
      <div className="flex gap-1 items-center">
        <h1 className="text-4xl font-poppins">Teklu</h1>
        {width}
      </div>

      <MobileHeader />

      <div className="w-96 justify-end flex items-center px-16 py-2 bg-[#f6f6f6]  shadow-custom2 rounded-3xl hidden md:block">
        <ul className="w-full flex gap-8 items-center justify-center font-poppins font-light">
          <li className="bg-white shadow-custom2 px-4 py-2 rounded-3xl cursor-pointer">
            <a
              className="font-bold text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              href="/home"
            >
              Home
            </a>
          </li>
          <li>
            <a className="font-bold" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="font-bold" href="/work">
              work
            </a>
          </li>
          <li>
            <a className="font-bold" href="/contact">
              contact
            </a>
          </li>
        </ul>
      </div>
      <div
        ref={menuRef}
        className="hidden w-14 h-14 z-10 fixed top-1 shadow-custom2 right-12 bg-white
        text-black rounded-full cursor-pointer flex items-center justify-center overflow-hidden"
      >
        <h1
          className="font-bold cursor-pointer text-sm text-center 
          text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          menu
        </h1>
      </div>
    </header>
  );
};

export default Mainheader;
