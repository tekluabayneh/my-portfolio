import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const AnimatedParagraph = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const elements = paragraphRef.current.querySelectorAll("span, br");

    // Create a timeline using gsap.fromTo
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 }, // Initial state
        { opacity: 1, y: 0, duration: 0.5 } // Final state
      )
      .fromTo(
        elements,
        { opacity: 0, y: 20 ,delay:0.5},
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 ,delay:0.5}
      );
  }, []);

  return (
    <p className="text-lg z-30" ref={paragraphRef}>
      I am actively contributing to open source projects, <br />
      building engaging and user-friendly websites, <br /> and tackling
      challenging problems that spark my creativity and <br /> passion for
      learning.
      <span className="underline font-bold pl-2 cursor-pointer z-20">
        <NavLink to="/about" className="cursor-pointer">
          About Me
        </NavLink>
      </span>
    </p>
  );
};

export default AnimatedParagraph;
