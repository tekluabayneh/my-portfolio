import React, { useState, useEffect } from "react";

const Temp2 = () => {
  const [transformStyle, setTransformStyle] = useState({
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  });

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const mouseX = e.clientX; // Mouse X position
    const mouseY = e.clientY; // Mouse Y position

    // Calculate transform properties based on mouse position
    const rotateX = (mouseY / window.innerHeight - 0.5) * 30; // Rotation based on Y axis
    const rotateY = (mouseX / window.innerWidth - 0.5) * -30; // Rotation based on X axis
    const translateX = (mouseX / window.innerWidth - 0.5) * 50; // Translate on X axis
    const translateY = (mouseY / window.innerHeight - 0.5) * 50; // Translate on Y axis

    // Update the transform style
    setTransformStyle({
      transform: `translate3d(${translateX}px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg) skew(0deg, 0deg)`,
    });
  };

  const resetTransform = () => {
    setTransformStyle({
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    });
  };

  useEffect(() => {
    // Add event listener to capture mouse movement
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetTransform);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mouseleave", resetTransform);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="particle-wrapper absolute top-4 left-16 w-5/6 h-[32rem] transform perspective-[8000px]">
      <div
        className="particle-2 opacity-35 w-6 h-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"
        style={{
          ...transformStyle,
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      ></div>
    </div>
  );
};

export default Temp2;
