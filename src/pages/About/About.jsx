import React from "react";
import LetsConnect from "../../components/Let'sConnect/Let'sConnect";
import Skills from "../../components/skills/skills";
import work2 from "../../assets/images/1.JPG";
import AboutBentoGrid from "./AboutBentoGrid";
const About = () => {
  return (
    <section
      className="w-full h-auto px-10"
      
      
    >
      <h1 className="text-4xl md:text-6xl pt-12 md:px-10">
        Helping businesses grow with end-to-end web development
      </h1>

      <h1 className="pl-5 py-20 text-2xl md2:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-400 to-pink-400">
        Hi again, I'm Teklu.
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 items-center">
        <p className="flex-1 text-lg font-medium md:px-12 font-medium">
          "Hi, I’m Teklu Abayneh. My journey as a full-stack developer started
          when I built my first to-do list app. Since then, I’ve been fascinated
          by how technology can solve real-world problems. Today, I specialize
          in developing full-stack applications, turning ideas into functional
          and user-friendly solutions."
        </p>

        <div className="flex-1 w-full ">
          <img
            className="w-full h-full object-cover bg-center bg-cover rounded-md"
            src={work2}
            alt="image"
          />
        </div>
      </div>
      <AboutBentoGrid />
      <Skills />
      <LetsConnect />
    </section>
  );
};

export default About;
