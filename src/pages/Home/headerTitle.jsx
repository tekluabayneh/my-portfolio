import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const HeaderTitle = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "circ.out" },
    });
    tl.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 50, delay: 0.5 },
      { opacity: 1, y: 0, stagger: 0.1, delay: 0.5 }
    );
  }, []);
  return (
    <div
      className="text-3xl  rotate-2 md2:text-6xl  md1:text-8xl font-bold flex flex-wrap items-center justify-center pt-24 pl-7"
      ref={containerRef}
      style={{ display: "flex", gap: "4px" }}
    >
      {/* First Line */}
      <div style={{ display: "flex", gap: "4px" }}>
        <span className="capitalize">f</span>
        <span>u</span>
        <span>l</span>
        <span>l-</span>
        <span className="capitalize">s</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span className="md:pl-6">W</span>
        <span>e</span>
        <span>b</span>
      </div>
      {/* Second Line */}
      <div style={{ display: "flex", gap: "4px" }}>
        <span className="capitalize">d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
