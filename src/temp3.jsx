// SlideText.js
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SlideText = ({ data, rootOrigin }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      // Initial GSAP setup
      gsap.set(containerRef.current.querySelectorAll(".slide-txt-item"), {
        transformOrigin: rootOrigin
          ? "center center -0.1em"
          : "center center -0.26em",
      });

      // Add event listener for click and mouseleave
      containerRef.current.addEventListener("click", handleClick);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners when component unmounts
      return () => {
        containerRef.current.removeEventListener("click", handleClick);
        containerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      };
    }
  }, [rootOrigin]);

  useEffect(() => {
    // Trigger GSAP animation when currentIndex changes
    animateItems();
  }, [currentIndex]);

  const animateItems = () => {
    const items = itemsRef.current;

    // Animate each slide text item
    items.forEach((item, index) => {
      const isLastItem = index === data.length - 1;
      const animationProps = {
        out: "translate3d(0px, 25.5961rem, -26.0468rem) rotateX(-91deg)",
        in: "translate3d(0px, -25.5961rem, -26.0468rem) rotateX(91deg)",
      };

      if (isLastItem) {
        gsap.set(item, { transform: "none", autoAlpha: 1 });
      } else {
        gsap.set(item, { transform: animationProps.out, autoAlpha: 0 });
      }

      // GSAP timeline animation
      const tl = gsap.timeline({ paused: true });
      if (isLastItem) {
        tl.set(item, { transform: "none", autoAlpha: 1 })
          .to(item, {
            transform: animationProps.in,
            autoAlpha: 0,
            duration: 0.6,
            ease: "expo.inOut",
          })
          .to(item, { duration: 0.6 * index - 0.6 })
          .set(item, { transform: animationProps.out, autoAlpha: 0 })
          .to(item, {
            transform: "none",
            autoAlpha: 1,
            duration: 0.6,
            ease: "expo.inOut",
          });
      } else {
        tl.set(item, { transform: animationProps.out, autoAlpha: 0 })
          .to(item, { duration: 0.6 * index })
          .to(item, {
            transform: "none",
            autoAlpha: 1,
            duration: 0.6,
            ease: "expo.inOut",
          })
          .to(item, {
            transform: animationProps.in,
            autoAlpha: 0,
            duration: 0.6,
            ease: "expo.inOut",
          })
          .to(item, { duration: (data.length - 2 - index) * 0.6 });
      }
      tl.play();
    });
  };

  const handleClick = () => {
    // Change the current slide index
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleMouseLeave = () => {
    // Handle the mouse leave event to reset animation or state if necessary
    setCurrentIndex(0); // Optional: Reset to the first item
  };

  return (
    <div
      ref={containerRef}
      className="slide-txt-wrap"
      style={{
        display: "grid",
        perspective: "82.5rem",
        overflow: "hidden",
      }}
    >
      {data.map((text, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`slide-txt-item ${rootOrigin ? "root-origin" : ""}`}
          style={{ transition: "all 0.6s ease" }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default SlideText;
