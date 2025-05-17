import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    // Apply scroll-triggered animations to each skill element
    const skillElements = document.querySelectorAll(".skill-list span");

    skillElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none pause",
            scrub: 0.5,
            markers: false,
            onLeave: () => gsap.to(element, { opacity: 0 }),
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.revert());
    };
  }, []);

  return (
    <section className="w-full h-[240vh] md1:h-[130vh] md:h-screen py-30">
      <h1 className="text-center py-20 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-400 to-pink-400">
        My Skill set
      </h1>

      <div className="w-full grid xs:grid-cols-1 md:grid-cols-4 gap-1">
        <div className="flex flex-col gap-5 skill-list">
          <h1 className="text-2xl">Languages</h1>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Tailwindcss</span>
          <span>JavaScript</span>
          <span>TypeScript(new...)</span>
        </div>

        <div className="flex flex-col gap-5 skill-list">
          <h1 className="text-2xl">Frameworks & Libraries</h1>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
        </div>

        <div className="flex flex-col gap-5 skill-list">
          <h1 className="text-2xl">Tools & Technologies</h1>
          <span>Git</span>
          <span>GitHub</span>
          <span>NPM</span>
          <span>Docker</span>
          <span>VS-code & neovim(new...)</span>
          <span>Postman (for API testing)</span>
        </div>

        <div className="gap-5 skill-list flex flex-col">
          <h1 className="text-2xl">Databases</h1>
          <span>MySQL</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
