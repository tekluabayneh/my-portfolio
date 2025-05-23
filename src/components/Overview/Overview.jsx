import React from "react";
import work1 from "../../assets/PortfolioImages/1.jpeg";
import work2 from "../../assets/PortfolioImages/3.png";
import { portfolio6 } from "../../pages/Contact/img";
import { Link, NavLink } from "react-router-dom";
import { GsapMagnetic } from "../GsapMagnetic";
import useMagneticEffect from "../../pages/Work/animateLiveBtn";
const Overview = () => {
  const { magneticRef, magneteiccontainerRef } = useMagneticEffect();
  return (
    <section className="w-full h-auto py-10 flex flex-col gap-20 pt-20">
      <div className="w-full flex flex-col md:flex-row px-10 xl:gap-10 md:gap-3">
        <p className="text-2xl md:pl-3 pb-10 md:pb-0">
          My passion for coding, problem-solving, and building seamless systems
          positions me uniquely to deliver cutting-edge applications that drive
          growth and performance.
        </p>

        <div className="w-full flex flex-col gap-12">
          <p className="w-full  text-xs leading-6">
            <span className="text-sm">
              Helping Brands Thrive in the Digital Landscape
            </span>{" "}
            <br />
            My experience with full-stack development and React positions me to
            build scalable, interactive, and modern web solutions that meet
            today’s challenges.
          </p>
          <GsapMagnetic>
            <NavLink to={"/about"}>
              <button className="w-[clamp(9em,12vw,11em)] h-[clamp(9em,12vw,11em)] rounded-full bg-white shadow-custom2 cursor-pointer flex items-center justify-center text-lg">
                About Me
              </button>
            </NavLink>
          </GsapMagnetic>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        <div
          ref={(el) => (magneteiccontainerRef.current[5] = el)}
          className="w-full relative flex flex-col"
        >
          <div className="w-full h-80 overflow-hidden">
            <img
              className="w-full h-full bg-center bg-cover hover:scale-105 cursor-pointer transition-all"
              src={work1}
              alt="portfolio image"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <button
              ref={(el) => (magneticRef.current[5] = el)}
              className="bg-white absolute top-1/2 left-1/2 transform
     -translate-x-1/2 -translate-y-1/2 shadow-custom2 text-black rounded-full w-20 h-20"
            >
              <Link
                target="_blank"
                to={
                  "https://kukan-api-git-main-tekluabaynehs-projects.vercel.app"
                }
              >
                view live
              </Link>
            </button>
            <h1 className="py-2 text-2xl pl-3">RESTful API for JSON Data</h1>
            <hr className="w-full h-[2px] bg-gray-400 text-center" />
            <p>
              The Data Provider API allows students or anyone looking to
              showcase their products to seamlessly use this service for their
              needs.
            </p>

            <p className="text-xs md:text-sm">
              A simple <strong>RESTful API</strong> built with{" "}
              <strong>Node.js</strong> and <strong>Express</strong> to deliver
              <strong>JSON data</strong> with <strong>CRUD operations</strong>.
              It provides an easy way to manage
              <strong>data</strong> and is perfect for integrating with{" "}
              <strong>front-end applications</strong>.
            </p>
          </div>
        </div>
        <div
          ref={(el) => (magneteiccontainerRef.current[6] = el)}
          className="relative w-full flex flex-col"
        >
          <div className="w-full h-80 overflow-hidden">
            <img
              className="w-full h-full bg-center bg-cover hover:scale-105 cursor-pointer transition-all"
              src={portfolio6}
              alt="portfolio image"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <button
              ref={(el) => (magneticRef.current[6] = el)}
              className="absolute font-medium top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-custom2 text-black rounded-full w-20 h-20 "
            >
              <Link
                to={"https://micro-task-marketplace-1.onrender.com"}
                target="_blank"
              >
                view live
              </Link>
            </button>
            <h1 className="py-2 text-2xl pl-3">Apple Clone</h1>
            <hr className="w-full h-[2px] bg-gray-400 text-center" />
            <div className="text-xs md:text-sm">
              <strong> AI Chatbot:</strong> In-app assistant for platform
              guidance.
              <br />
              <strong>🧠 AI Matching:</strong> Suggests freelancers based on
              project needs.
              <br />
              <strong>⚙️ Tech Stack:</strong>
              <br />
              <strong>Frontend:</strong> React.js, Tailwind CSS
              <br />
              <strong>Backend:</strong> Node.js + Express, JWT Auth
              <br />
              <strong>Database:</strong> MySQL
              <br />
              <strong>Extras:</strong> OpenAI API (chatbot), React Query, Toast
              UI
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-32 flex items-center justify-center">
        <GsapMagnetic>
          <NavLink to={"work"}>
            <button className="px-10 py-4 flex items-center justify-center rounded-3xl cursor-pointer ring-1 ring-gray-500">
              More Work <sup>5</sup>
            </button>
          </NavLink>
        </GsapMagnetic>
      </div>
    </section>
  );
};

export default Overview;
