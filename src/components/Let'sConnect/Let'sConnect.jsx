import React from "react";
import { NavLink } from "react-router-dom";
import { GsapMagnetic } from "../GsapMagnetic";

const LetsConnect = () => {
  return (
    <section className="w-full h-screen flex flex-col gap-5  px-5">
      <h1 className="pl-5 text-2xl md:text-7xl font-bold px-12 md:pt-20">
        Ready to Bring Your <br /> Vision to Life?
      </h1>
      <div className="w-full flex flex-col gap-5 relative">
        <hr className="w-5/6 m-auto h-[2px] bg-gray-500 my-12 " />
        <div className="absolute -top-2 right-5 md:top-1 md:right-40">
          <GsapMagnetic>
            <button
              className="w-[clamp(9em,12vw,11em)] h-[clamp(9em,12vw,11em)] rounded-full bg-white shadow-custom2 
          cursor-pointer flex items-center justify-center text-lg"
            >
              <NavLink to="/contact">Get in touch</NavLink>
            </button>
          </GsapMagnetic>
        </div>
      </div>

      <div className="w-full flex xs:gap-10 md:gap-20 items-center justify-start py-10 px-32 pt-20 xs:flex-col  md:flex-row">
        <GsapMagnetic>
          <button className="px-14 py-6 flex items-center justify-center rounded-3xl cursor-pointer ring-1 ring-gray-500">
            tekluabayneh@gmail.com
          </button>
        </GsapMagnetic>
        <GsapMagnetic>
          <button className="px-14 py-6 flex items-center justify-center rounded-3xl cursor-pointer ring-1 ring-gray-500">
            0946276315
          </button>
        </GsapMagnetic>
      </div>
      <div className="w-full flex justify-end xs:mb-52">
        <ul className="flex gap-5">
          <GsapMagnetic>
            <li className="text-xs capitalize cursor-pointer">
              <NavLink
                target="_blank"
                to={"https://www.linkedin.com/in/teklu-abayneh/"}
              >
                LinkedIn
              </NavLink>
            </li>
          </GsapMagnetic>
          <GsapMagnetic>
            <li className="text-xs capitalize cursor-pointer">
              <NavLink target="_blank" to={"https://github.com/tekluabayneh"}>
                github
              </NavLink>
            </li>
          </GsapMagnetic>
          <GsapMagnetic>
            <li className="text-xs capitalize cursor-pointer">instagram</li>
          </GsapMagnetic>
        </ul>
      </div>
    </section>
  );
};

export default LetsConnect;
