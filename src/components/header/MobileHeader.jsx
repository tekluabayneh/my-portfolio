import React from "react";

const MobileHeader = () => {
  return (
    <header>
      <div
        className="w-full  h-screen  justify-start flex flex-col items-start 
      px-5 py-2 bg-black text-white shadow-custom2  md:hidden absolute top-0 right-0  z-20"
      >
        <span className=" absolute top-10 right-5 px-4 py2 bg-white shadow-custom2 cursor-pointer rounded-full font-bold h-16 w-16 flex items-center justify-center text-black">
          close
        </span>
        <ul className="w-full h-5/6 flex flex-col gap-8 items-start pt-32 font-poppins font-light">
          <hr className="w-full text-white h-2 w-full pb-20" />
          <li className="w-full">
            <a className="font-bold text-[2.5em]" href="/home">
              Home
            </a>
          </li>
          <li className="w-full">
            <a className="font-bold text-[2.5em]" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="font-bold text-[2.5em]" href="/work">
              work
            </a>
          </li>
          <li>
            <a className="font-bold text-[2.5em]" href="/contact">
              contact
            </a>
          </li>
        </ul>
        <hr className="text-white h-2 w-full" />

        <div className="w-full flex items-center justify-center gap-8">
          <span className="capitalize font-medium -tracking-tighter">
            instagram
          </span>
          <span className="capitalize font-medium -tracking-tighter">
            github
          </span>
          <span className="capitalize font-medium -tracking-tighter">
            linkedin
          </span>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
