import { useRef, useEffect } from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

const useMagneticEffect = () => {
  const magneticRef = useRef([]);
  const magneteiccontainerRef = useRef([]);

  useEffect(() => {
    const gsapInstances = [];

    magneteiccontainerRef.current.forEach((container, index) => {
      if (!container) return;

      const magnetic = magneticRef.current[index];
      if (!magnetic) return;

      gsap.set(magnetic, { scale: 0 });

      const Xto = gsap.quickTo(magnetic, "x", {
        duration: 1,
        ease: "power1.out",
        delay: 1,
      });

      const Yto = gsap.quickTo(magnetic, "y", {
        duration: 1,
        ease: "power1.out",
        delay: 1,
      });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, top, left } = container.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        Xto(x);
        Yto(y);
        gsap.to(magnetic, {
          scale: 1,
          opacity: 1,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(magnetic, {
          scale: 0.3,
          opacity: 0,
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      gsapInstances.push(() => {
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      gsapInstances.forEach((cleanup) => cleanup());
    };
  }, []);

  return { magneticRef, magneteiccontainerRef };
};

export default useMagneticEffect;
