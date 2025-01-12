import React from "react";

const MobileHeader = ({ togggleheader, settoggleheader, hadelheadertoggl }) => {
  return (
    <header className="overflow-hidden">
      <div></div>
      <div
        style={{
          transform: togggleheader ? "translateX(0)" : "translateX(24rem)",
        }}
        className="w-96 h-screen  transform translate-x-96 transition-custom transition-transform  justify-start flex flex-col items-start 
      px-5 py-2 bg-black text-white shadow-custom2  fixed top-0 right-0  z-20"
      >
        <span
          onClick={() => settoggleheader(false)}
          className="absolute top-5 right-5 px-4 py-2 bg-white shadow-custom2 cursor-pointer
         rounded-full font-bold h-16 w-16 flex items-center justify-center text-black"
        >
          close
        </span>
        <ul className="w-full h-5/6 flex flex-col xs:gap-8 md:gap-3 items-start  xs:pt-32 md:pt-20  font-poppins font-light">
          <hr className="w-full text-white h-2 w-full pb-20" />
          <li className="w-full">
            <a className="text-[2.5em]" href="/home">
              Home
            </a>
          </li>
          <li className="w-full">
            <a className="text-[2.5em]" href="/about">
              About
            </a>
          </li>
          <li>
            <a className=" text-[2.5em]" href="/work">
              work
            </a>
          </li>
          <li>
            <a className="text-[2.5em]" href="/contact">
              contact
            </a>
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
