import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const Loading = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".SubContainer span");
    const tl = gsap.timeline({ repeat: -1 });
    gsap.set(".SubContainer span", {
      opacity: 0,
      filter: "blur(10px)",
    });
    if (spans.length > 0) {
      tl.to(".SubContainer span", {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        filter: "blur(0px)",
        stagger: {
          amount: 1,
          from: "start",
        },
      });
    }
  }, []);

  return (
    <section className="w-full h-screen bg-black flex items-center justify-center">
      <div className="SubContainer w-full h-screen flex items-center justify-center gap-5 text-white">
        <span className="text-5xl">L</span>
        <span className="text-5xl">O</span>
        <span className="text-5xl">A</span>
        <span className="text-5xl">D</span>
        <span className="text-5xl">I</span>
        <span className="text-5xl">N</span>
        <span className="text-5xl">G</span>
      </div>
    </section>
  );
};

export default Loading;
