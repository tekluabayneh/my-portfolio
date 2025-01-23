import React, { useEffect, useRef } from "react";
import gsap from "gsap";
export const GsapMagnetic = ({ children }) => {
  const Magnetic = useRef(null);
  useEffect(() => {
    const Xto = gsap.quickTo(Magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const Yto = gsap.quickTo(Magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    Magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        Magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      Xto(x);
      Yto(y);
    });

    Magnetic.current.addEventListener("mouseleave", () => {
      Xto(0);
      Yto(0);
    });
  }, []);

  return React.cloneElement(children, { ref: Magnetic });
};
