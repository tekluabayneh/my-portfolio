import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutBentoGrid = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
              }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe each section
    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full h-auto grid md:px-5 py-20 gap-6 my-6">
      <div className="p-5" ref={(el) => sectionsRef.current.push(el)}>
        <h1 className="font-medium text-4xl">Projects:</h1>
        <p className="p-2">
          <span className="font-medium text-gray-400 underline">
            Micro-Task Marketplace:
          </span>{" "}
          Built an AI-driven freelancing platform with real-time matching and an
          in-app chatbot using the OpenAI API. Developed secure JWT and
          OAuth-based authentication, scalable REST APIs, and a responsive UI
          with React and Tailwind CSS. Optimized performance and user experience
          with React Query and Toast UI.
        </p>
        <p className="p-2">
          <span className="font-medium text-gray-400 underline">
            Amazon E-Commerce Clone:
          </span>{" "}
          Built a functional e-commerce site with product listings, shopping
          cart, and secure checkout using React and Node.js. Integrated API for
          dynamic product data.
        </p>
        <p className="p-2">
          <span className="font-medium text-gray-400 underline">
            API Data Provider:
          </span>{" "}
          Created a secure API service with key authentication, designed to
          fetch and return dynamic data efficiently for various projects.
        </p>
        <p className="p-2">
          FreeCodeCamp Projects: Developed several web apps covering key
          concepts like CRUD operations, REST APIs, and front-end design.
        </p>
      </div>
      <div className="p-5" ref={(el) => sectionsRef.current.push(el)}>
        <h1 className="py-3 font-medium text-4xl">Current Work:</h1>
        <p className="p-2">
          I’m currently exploring new technologies to enhance my skills, working
          as a freelancer, and actively contributing to open-source projects.
        </p>
      </div>
      <div className="p-5" ref={(el) => sectionsRef.current.push(el)}>
        <h1 className="text-4xl font-medium py-2">Future Goals:</h1>
        <p className="p-2">
          My goal is to help the clients or company I work for by leveraging my
          full-stack development expertise. I also aim to transition into AI and
          machine learning, continuously learning and exploring new technologies
          to drive innovation
        </p>
      </div>
      <div className="p-5" ref={(el) => sectionsRef.current.push(el)}>
        <h1 className="py-3 font-medium text-4xl">Hobbies:</h1>
        <p className="p-2">
          I enjoy swimming, exploring new things, playing video games, and
          continually learning new technologies as part of my journey to become
          a better full-stack developer.
        </p>
      </div>
      <div className="p-5" ref={(el) => sectionsRef.current.push(el)}>
        <h1 className="text-4xl py-3">History:</h1>
        <p className="p-2">
          My fascination with technology started as a child, watching how people
          used it to make life easier. As I grew, this interest deepened, and I
          became curious about creating solutions myself. I saw how developers
          built real-world applications to solve problems, which inspired me to
          start learning web development. I began with HTML and CSS through
          YouTube tutorials, and later joined a bootcamp called Evangadi, where
          I became a full-stack web developer.
        </p>
      </div>
    </section>
  );
};

export default AboutBentoGrid;
