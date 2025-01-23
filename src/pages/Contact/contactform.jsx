import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { GsapMagnetic } from "../../components/GsapMagnetic";
const ContactForm = () => {
  return (
    <section className="w-full h-auto pt-12 flex flex-col md:flex-row-reverse gap-10 pt-32">
      <div className="w-full flex flex-col gap-5 md:flex-1">
        <h3 className="font-medium text-2xl text-gray-400 capitalize underline">
          contact details
        </h3>
        <div className="flex items-start flex-col">
          <samp className="font-medium text-gray-400">Email</samp>
          <h1>tekluabayneh@gmail.com</h1>
        </div>
        <div className="flex items-start flex-col">
          <span className="font-medium text-gray-400">phone</span>
          <span className="pl-3">0946276315</span>
        </div>
        <div className="w-full hidden md:flex flex-col gap-10">
          <span className="font-medium text-gray-400">social media</span>
          <div className="pl-5 flex flex-col gap-5">
            <GsapMagnetic>
              <span className="cursor-pointer">Instagram</span>
            </GsapMagnetic>
            <GsapMagnetic>
              <NavLink
                target="_blank"
                to={"https://www.linkedin.com/in/teklu-abayneh"}
              >
                LinkedIn
              </NavLink>
            </GsapMagnetic>
            <GsapMagnetic>
              <NavLink target="_blank" to={"https://github.com/tekluabayneh"}>
                github
              </NavLink>
            </GsapMagnetic>
          </div>
        </div>
      </div>
      <div className="w-full  w-[70%] md:h-auto">
        <form>
          <hr className="w-full h-[2px] bg-gray-400 my-12" />
          <label className="font-medium text-gray-400 text-xl " htmlFor="name ">
            what's your name?
          </label>
          <input
            className="bg-transparent  w-full border-none pl-5 outline-none mt-1"
            type="text"
            placeholder="John Doe"
          />
          <hr className="w-full h-[2px] bg-gray-400 my-12" />
          <label className="font-medium text-gray-400 text-xl " htmlFor="name ">
            What's your email?
          </label>
          <input
            className="bg-transparent  w-full border-none pl-5 outline-none mt-1"
            type="email"
            placeholder="john@doe.com "
          />
          <hr className="w-full h-[2px] bg-gray-400 my-12" />
          <label className="font-medium text-gray-400 text-xl " htmlFor="name ">
            What's the name of your organization?
          </label>
          <input
            className="bg-transparent  w-full border-none pl-5 outline-none mt-1"
            type="text"
            placeholder="Web development"
          />
          <hr className="w-full h-[2px] bg-gray-400 my-12" />
          <label className="font-medium text-gray-400 text-xl " htmlFor="name ">
            Your message
          </label>
          <textarea
            className="w-full bg-transparent border-none pl-5 mt-1 outline-none resize-none"
            id="textarea"
            placeholder="Hello Teklu, i website web for my... "
          ></textarea>
          <hr className="w-full h-[2px] bg-gray-400 my-12" />
          {/* Submit Button */}
          <GsapMagnetic>
            <button className="w-[clamp(9em,12vw,11em)] h-[clamp(9em,12vw,11em)] rounded-full bg-white shadow-custom2 cursor-pointer flex items-center justify-center text-lg">
              <NavLink to="/contact">Send it!</NavLink>
            </button>
          </GsapMagnetic>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
