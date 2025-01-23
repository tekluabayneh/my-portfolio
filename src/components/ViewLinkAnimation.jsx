// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const ViewLinkAnimation = ({ children }) => {
//   const flowMouseViewBtn = useRef(null); // Ref for the button
//   const flowMouseViewBtn_con = useRef(null); // Ref for the container

//   useEffect(() => {
//     const Xto = gsap.quickTo(flowMouseViewBtn.current, "x", {
//       ease: "power1.out",
//       delay: 0.5,
//       duration: 1,
//     });
//     const Yto = gsap.quickTo(flowMouseViewBtn.current, "y", {
//       ease: "power1.out",
//       delay: 0.5,
//       duration: 1,
//     });

//     const container = flowMouseViewBtn_con.current;

//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const { width, height, top, left } = container.getBoundingClientRect();

//       const x = clientX - (left + width / 2);
//       const y = clientY - (top + height / 2);

//       Xto(x);
//       Yto(y);

//       gsap.to(flowMouseViewBtn.current, {
//         scale: 1,
//         opacity: 1,
//       });
//     };

//     const handleMouseLeave = (e) => {
//       gsap.to(flowMouseViewBtn.current, {
//         scale: 0.3,
//         opacity: 0,
//       });
//     };

//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div ref={flowMouseViewBtn_con} className="w-full h-full absolute bg-black">
//       <div ref={flowMouseViewBtn} className="relative" />
//       <button className="bg-purple-500 text-white rounded-full h-12 w-12">
//         man can do it{" "}
//       </button>
//       {/* {React.cloneElement(children)} */}
//     </div>
//   );
// };

// export default ViewLinkAnimation;
