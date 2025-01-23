import React from "react";
import ContactForm from "./contactform";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className="w-full h-auto px-10">
      <div className="w-full h-5/6 flex flex-col gap-20 items-start justify-between pt-16 md:px-12">
        <h1 className="xs:text-4xl md:text-6xl ">
          Let's start a <br /> project together
        </h1>
        <h1 className="md:text-4xl self-end ">
          As your Web Developer, <br />
          I’m Here to Bring Your Vision to Life
        </h1>

        <p className="text-red-500">
          <strong>Notice:</strong> my email sending functionality is currently
          broken due to a technical issue. Please use my direct email at
          <Link href="mailto:tekluabayneh@gmail.com" className="font-bold">
            tekluabayneh@gmail.com
          </Link>
          for any inquiries. i apologize for the inconvenience and appreciate
          your understanding.
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
