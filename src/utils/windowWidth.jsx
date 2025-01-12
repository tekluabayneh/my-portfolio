import React, { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    let handlewindowresize = () => {
      setwidth(window.innerWidth);
    };

    window.addEventListener("resize", handlewindowresize);

    return () => {
      window.removeEventListener("resize", handlewindowresize);
    };
  }, []);
  return width;
};

export default useWindowWidth;
