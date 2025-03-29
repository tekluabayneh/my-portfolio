import React, { useEffect, useRef, useState } from "react";
import useWindowWidth from "../../utils/windowWidth";
import MobileHeader from "./MobileHeader";
import { NavLink } from "react-router-dom";
import img from "../../assets/images/logoimg.avif";
import { GsapMagnetic } from "../GsapMagnetic";
const Mainheader = () => {
  const menuRef = useRef(null);
  const width = useWindowWidth();
  const [togggleheader, settoggleheader] = useState(false);
  const [navigetanimation, setnavigetanimation] = useState({
    width: 5,
    position: -62,
  });

  // handle header toggle
  const hadelheadertoggle = () => {
    settoggleheader(true);
  };

  const andelnavigationanimation = (width, position) => {
    setnavigetanimation({
      width: width,
      position: position,
    });
  };

  const handelScroll = () => {
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      if (scrollTop >= 30) {
        menuRef.current.classList.add("fixed");
        menuRef.current.classList.remove("hidden");
      } else {
        menuRef.current.classList.add("hidden");
        menuRef.current.classList.remove("fixed");
      }
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
      <div className="flex gap-1 items-center relative">
        <img
          className="w-8 h-8 rounded-md bg-center bg-center bg-contain "
          src={img}
          alt=""
        />
        <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-green-400"></span>
        <h1 className="text-4xl font-poppins">
          <NavLink to="/">Teklu</NavLink>
        </h1>
      </div>

      <MobileHeader
        togggleheader={togggleheader}
        settoggleheader={settoggleheader}
      />

      <nav className="w-96 justify-end flex items-center px-16 py-2 bg-[#f6f6f6] shadow-custom2 rounded-3xl hidden md:block">
        <ul className="relative w-full flex gap-8 items-center justify-center font-poppins font-light">
          <li
            style={{
              width: `${navigetanimation.width}rem`,
              transform: `translate3d(${navigetanimation.position}px, 0px, 0px)`,
            }}
            className="absolute w-20 z-0 top-0 left-0 bg-white shadow-custom2 px-4 py-5 rounded-3xl cursor-pointer transition-transform"
          ></li>

          <li
            onClick={() => andelnavigationanimation(5, -62)}
            className="px-2 py-2 rounded-3xl cursor-pointer z-10"
          >
            <NavLink
              className="font-bold text-nowrap"
              to={"/"}
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundImage:
                        "linear-gradient(to right, #9b4d96, #ec4899, #f43f5e)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }
                  : {}
              }
            >
              Home
            </NavLink>
          </li>
          <li
            onClick={() => andelnavigationanimation(5, 34)}
            className="px-2 py-2 rounded-3xl cursor-pointer z-10"
          >
            <NavLink
              className="font-bold text-nowrap"
              to="/about"
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundImage:
                        "linear-gradient(to right, #9b4d96, #ec4899, #f43f5e)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }
                  : {}
              }
            >
              About
            </NavLink>
          </li>
          <li
            onClick={() => andelnavigationanimation(5, 130)}
            className="px-2 py-2 rounded-3xl cursor-pointer z-10"
          >
            <NavLink
              className="font-bold"
              to="/work"
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundImage:
                        "linear-gradient(to right, #9b4d96, #ec4899, #f43f5e)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }
                  : {}
              }
            >
              Work
            </NavLink>
          </li>
          <li
            onClick={() => andelnavigationanimation(5.5, 228)}
            className="px-2 py-2 rounded-3xl cursor-pointer z-10"
          >
            <NavLink
              className="font-bold"
              to="/contact"
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundImage:
                        "linear-gradient(to right, #9b4d96, #ec4899, #f43f5e)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }
                  : {}
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="md:hidden cursor-pointer">
        <h1 onClick={hadelheadertoggle}>menu</h1>
      </div>

      <div
        ref={menuRef}
        className="hidden w-14 h-14 z-10 fixed top-5 shadow-custom2 right-12 bg-white text-black rounded-full cursor-pointer flex items-center justify-center overflow-hidden"
      >
        <GsapMagnetic>
          <div className=" w-14 h-14 z-10 fixed top-5 shadow-custom2 right-12 bg-white text-black rounded-full cursor-pointer flex items-center justify-center overflow-hidden">
            <h1
              onClick={hadelheadertoggle}
              className="font-bold cursor-pointer text-sm text-center text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            >
              menu
            </h1>
          </div>
        </GsapMagnetic>
      </div>
    </header>
  );
};

export default Mainheader;
