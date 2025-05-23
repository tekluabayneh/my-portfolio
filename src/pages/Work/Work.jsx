import React, { useEffect, useRef } from "react";
import LetsConnect from "../../components/Let'sConnect/Let'sConnect";
import gsap from "gsap";
import useMagneticEffect from "./animateLiveBtn";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
} from "../Contact/img";
import { Link } from "react-router-dom";
import { GsapMagnetic } from "../../components/GsapMagnetic";

//
// https://tiny-paprenjak-796ee4.netlify.app/
const Work = () => {
  const { magneticRef, magneteiccontainerRef } = useMagneticEffect();

  return (
    <section className="w-full h-auto px-2 md2:px-10 ">
      <div className="w-full h-5/6">
        <h1 className="text-4xl md:text-7xl pt-5 md:p-20">
          Real Results: <br /> My Portfolio
        </h1>
      </div>

      <div className="w-full md:px-6 overflow-hidden">
        <div
          ref={(el) => (magneteiccontainerRef.current[0] = el)}
          className="overflow-hidden relative w-full h-[70vh] px-5 flex flex-col md:flex-row justify-center md:gap-5 items-center
         bg-slate-100 my-20 rounded-lg cursor-pointer transition-all hover:scale-95"
        >
          <div className="flex-1">
            <img
              className="bg-center bg-cover   w-[30rem] h-full md:w-full  object-contain"
              src={portfolio6}
              alt="portfolio1"
            />
          </div>

          <div className="flex-1 ">
            <button
              ref={(el) => (magneticRef.current[0] = el)}
              className="absolute font-medium top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-custom2 text-black rounded-full w-20 h-20 "
            >
              <Link
                to={"https://micro-task-marketplace-1.onrender.com"}
                target="_blank"
              >
                view live
              </Link>
            </button>
            <h1 className="xs:text-2xl md:text-4xl xs:text-balance p-1 md:py-3 xs:text-center md:text-start">
              Micro-Task_Marketplace
            </h1>

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

            <GsapMagnetic>
              <button className="px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://github.com/tekluabayneh/Micro-Task_Marketplace"}
                  target="_blank"
                >
                  view on GitHub
                </Link>
              </button>
            </GsapMagnetic>
            <GsapMagnetic>
              <button className="md:hidden  px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://micro-task-marketplace-1.onrender.com"}
                  target="_blank"
                >
                  view live
                </Link>
              </button>
            </GsapMagnetic>
          </div>
        </div>

        <div
          ref={(el) => (magneteiccontainerRef.current[1] = el)}
          className="overflow-hidden relative w-full h-[70vh] px-5 flex flex-col md:flex-row justify-center md:gap-5 items-center
         bg-slate-100 my-20 rounded-lg cursor-pointer transition-all hover:scale-95"
        >
          <div className="flex-1">
            <img
              className="bg-center bg-cover   w-[30rem] h-full md:w-full  object-contain"
              src={portfolio1}
              alt="portfolio1"
            />
          </div>

          <div className="flex-1 ">
            <button
              ref={(el) => (magneticRef.current[1] = el)}
              className="absolute font-medium top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-custom2 text-black rounded-full w-20 h-20"
            >
              <Link
                to={
                  "https://kukan-api-git-main-tekluabaynehs-projects.vercel.app"
                }
                target="_blank"
              >
                view live
              </Link>
            </button>
            <h1 className="xs:text-2xl md:text-4xl xs:text-balance p-1 md:py-3 xs:text-center md:text-start">
              RESTful API for JSON Data
            </h1>

            <p className="text-xs md:text-sm">
              A simple <strong>RESTful API</strong> built with{" "}
              <strong>Node.js</strong> and <strong>Express</strong> to deliver
              <strong>JSON data</strong> with <strong>CRUD operations</strong>.
              It provides an easy way to manage
              <strong>data</strong> and is perfect for integrating with{" "}
              <strong>front-end applications</strong>.
            </p>
            <GsapMagnetic>
              <button className="px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://github.com/tekluabayneh/Kukandummyjson"}
                  target="_blank"
                >
                  view on GitHub
                </Link>
              </button>
            </GsapMagnetic>
            <GsapMagnetic>
              <button className="md:hidden  px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={
                    "https://kukan-api-git-main-tekluabaynehs-projects.vercel.app"
                  }
                  target="_blank"
                >
                  view live
                </Link>
              </button>
            </GsapMagnetic>
          </div>
        </div>

        {/*  */}
        <div
          ref={(el) => (magneteiccontainerRef.current[2] = el)}
          className="relative w-full h-[70vh] px-5 flex flex-col md:flex-row justify-center md:gap-5 items-center
         bg-slate-100 my-20 rounded-lg cursor-pointer transition-all hover:scale-95"
        >
          <div className="flex-1">
            <img
              className="bg-center bg-cover  w-[33rem] md:w-full h-full object-contain"
              src={portfolio3}
              alt=""
            />
          </div>
          <div className="flex-1">
            <button
              ref={(el) => (magneticRef.current[2] = el)}
              className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-custom2 text-black rounded-full w-20 h-20"
            >
              <Link
                to={"https://bejewelled-blancmange-eeaf5c.netlify.app"}
                target="_blank"
              >
                view live
              </Link>
            </button>
            <h1 className="xs:text-2xl md:text-4xl xs:text-balance p-1 md:py-3 xs:text-center md:text-start">
              Apple-Inspired Website
            </h1>

            <p className="text-xs md:text-sm">
              A<strong>responsive</strong> and{" "}
              <strong>modern Apple-inspired</strong> website built using{" "}
              <strong>React</strong>. This project showcases a{" "}
              <strong>clean</strong>, <strong>user-friendly UI</strong> with{" "}
              <strong>smooth navigation</strong> and{" "}
              <strong>interactive elements</strong>, though it currently doesn't
              include a <strong>backend</strong>.
            </p>
            <GsapMagnetic>
              <button className="px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://github.com/tekluabayneh/my_Apple"}
                  target="_blank"
                >
                  view on GitHub
                </Link>
              </button>
            </GsapMagnetic>
            <GsapMagnetic>
              <button className="md:hidden  px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://bejewelled-blancmange-eeaf5c.netlify.app"}
                  target="_blank"
                >
                  view live
                </Link>
              </button>
            </GsapMagnetic>
          </div>
        </div>
        {/*  */}
        <div
          ref={(el) => (magneteiccontainerRef.current[3] = el)}
          className="relative w-full h-[70vh] px-5 flex flex-col md:flex-row justify-center md:gap-5 items-center
         bg-slate-100 my-20 rounded-lg cursor-pointer transition-all hover:scale-95"
        >
          <div className="flex-1">
            <img
              className="bg-center bg-cover  w-[33rem] md:w-full h-full object-contain"
              src={portfolio2}
              alt=""
            />
          </div>
          <div className="flex-1">
            <button
              ref={(el) => (magneticRef.current[3] = el)}
              className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform shadow-custom2 text-black rounded-full w-20 h-20"
            >
              <Link
                target="_blank"
                to={"https://storied-starship-98aefc.netlify.app"}
              >
                view live
              </Link>
            </button>
            <h1 className="xs:text-2xl md:text-4xl xs:text-balance p-1 md:py-3 xs:text-center md:text-start">
              Interactive Dashboard
            </h1>

            <p className="text-xs md:text-sm">
              An interactive dashboard built with <strong>React</strong>,
              featuring a clean and responsive design. This frontend-only
              dashboard includes <strong>data visualization</strong> and{" "}
              <strong>user interface elements</strong>, offering an intuitive
              experience for managing and displaying information.
            </p>
            <GsapMagnetic>
              <button className="px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://github.com/tekluabayneh/DashBoard"}
                  target="_blank"
                >
                  view on GitHub
                </Link>
              </button>
            </GsapMagnetic>
            <GsapMagnetic>
              <button className="md:hidden  px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://storied-starship-98aefc.netlify.app"}
                  target="_blank"
                >
                  view live
                </Link>
              </button>
            </GsapMagnetic>
          </div>
        </div>
        {/*  */}
        <div
          ref={(el) => (magneteiccontainerRef.current[4] = el)}
          className="relative w-full h-[70vh] px-5 flex flex-col md:flex-row justify-center md:gap-5 items-center
         bg-slate-100 my-20 rounded-lg cursor-pointer transition-all hover:scale-95"
        >
          <div className="flex-1">
            <img
              className="bg-center bg-cover  w-[33rem] md:w-full h-full object-contain"
              src={portfolio4}
              alt=""
            />
          </div>
          <div className="flex-1">
            <button
              ref={(el) => (magneticRef.current[4] = el)}
              className="bg-white absolute top-1/2 left-1/2 transform
               -translate-x-1/2 -translate-y-1/2 shadow-custom2 text-black rounded-full w-20 h-20"
            >
              <Link
                target="_blank"
                to={"https://sparkling-biscotti-594ea4.netlify.app"}
              >
                view live
              </Link>
            </button>
            <h1 className="xs:text-2xl md:text-4xl xs:text-balance p-1 md:py-3 xs:text-center md:text-start">
              Amazon-Inspired E-Commerce Website
            </h1>

            <p className="text-xs md:text-sm">
              An <strong>Amazon-inspired e-commerce</strong> website built with{" "}
              <strong>React</strong> for the frontend and{" "}
              <strong>Firebase</strong> for the backend. It features{" "}
              <strong>product listings</strong>, a{" "}
              <strong>shopping cart</strong> with{" "}
              <strong>stripe payment</strong>, and{" "}
              <strong>user authentication</strong>. <strong>Firebase</strong>
              handles data storage and authentication, providing a seamless and
              dynamic user experience.
            </p>
            <GsapMagnetic>
              <button className="px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://github.com/tekluabayneh/my_Amazon"}
                  target="_blank"
                >
                  view on GitHub
                </Link>
              </button>
            </GsapMagnetic>
            <GsapMagnetic>
              <button className="md:hidden  px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://sparkling-biscotti-594ea4.netlify.app"}
                  target="_blank"
                >
                  view live
                </Link>
              </button>
            </GsapMagnetic>
          </div>
        </div>
        {/*  */}
        <div
          ref={(el) => (magneteiccontainerRef.current[5] = el)}
          className="relative w-full h-[70vh] px-5 flex flex-col md:flex-row justify-center md:gap-5 items-center
         bg-slate-100 my-20 rounded-lg cursor-pointer transition-all hover:scale-95"
        >
          <div className="flex-1">
            <img
              className="bg-center bg-cover  w-[33rem] md:w-full h-full object-contain"
              src={portfolio5}
              alt=""
            />
          </div>
          <div className="flex-1 ">
            <button
              ref={(el) => (magneticRef.current[5] = el)}
              className="bg-white absolute top-1/2 left-1/2 transform
               -translate-x-1/2 -translate-y-1/2 shadow-custom2 text-black rounded-full w-20 h-20"
            >
              <Link
                target="_blank"
                to={"https://tiny-paprenjak-796ee4.netlify.app"}
              >
                view live
              </Link>
            </button>
            <h1 className="xs:text-2xl md:text-4xl xs:text-balance p-1 md:py-3 xs:text-center md:text-start">
              Bootcamp Website
            </h1>

            <p className="text-xs md:text-sm">
              A bootcamp platform built with <strong>HTML</strong>,{" "}
              <strong>Bootstrap</strong>, and a
              <strong>Node.js/Express backend</strong>. The website features{" "}
              <strong>JWT-based authentication</strong>, allowing students to
              register with , log in, and securely access{" "}
              <strong>class videos</strong> and <strong>book materials</strong>.
              It provides an intuitive interface for students to manage their
              learning journey.
            </p>
            <GsapMagnetic>
              <button className="px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={
                    "https://github.com/tekluabayneh/online_bootCamp_platform"
                  }
                  target="_blank"
                >
                  view on GitHub
                </Link>
              </button>
            </GsapMagnetic>
            <GsapMagnetic>
              <button className="md:hidden   px-5 py-2 bg-transparent ring-1 ring-black rounded-3xl">
                <Link
                  to={"https://tiny-paprenjak-796ee4.netlify.app"}
                  target="_blank"
                >
                  view live
                </Link>
              </button>
            </GsapMagnetic>
          </div>
        </div>
      </div>
      <LetsConnect />
    </section>
  );
};

export default Work;
