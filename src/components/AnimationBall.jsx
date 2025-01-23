import React, { useEffect, useState } from "react";

const Temp = () => {
  const [transformStyle, setTransformStyle] = useState({
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  });

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateX = (mouseX / window.innerHeight - 0.5) * 30;
    const rotateY = (mouseX / window.innerWidth - 0.5) * 30;

    const translateX = (mouseX / window.innerWidth - 0.5) * 50;
    const translateY = (mouseY / window.innerHeight - 0.5) * 50;

    setTransformStyle({
      transform: `translate3d(${translateX}px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg) skew(0deg, 0deg)`,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="particle-wrapper absolute top-4 left-16 w-5/6 h-[32rem] transform perspective-[8000px] ">
        <div
          style={{
            ...transformStyle,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
          className="particle-7 opacity-50 absolute top-44 right-40 w-9 h-9 bg-gradient-to-r  from-purple-400 rounded-full transform scale-125 z-50"
        ></div>

        <div
          style={{
            ...transformStyle,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
          className="particle-6 opacity-25 w-3 h-3 absolute top-80 left-80  bg-gradient-to-r  from-blue-800  rounded-full"
        ></div>

        <div
          style={{
            ...transformStyle,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
          className="particle-5 opacity-70 absolute top-96 right-12 w-6 h-6 bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500 rounded-full"
        ></div>

        <div
          style={{
            ...transformStyle,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
          className="particle-4 opacity-10 w-9 h-9 absolute top-9 left-48 bg-gradient-to-r from-pink-400 via-blue-800 to-red-500 rounded-full"
        ></div>

        <div
          style={{
            ...transformStyle,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
          className="particle-2 opacity-35 absolute top-12 right-32 w-6 h-6 bg-gradient-to-r from-purple-400  to-purple-600 rounded-full"
        ></div>

        <div
          style={{
            ...transformStyle,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
          className="particle-1 opacity-35 absolute top-64 left-32 h-10 w-10 bg-gradient-to-r from-lime-500 via-pink-500 to-red-500 rounded-full"
        ></div>
      </div>
    </>
  );
};

export default Temp;
