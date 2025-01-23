import React from "react";
import {
  bootstrap,
  css,
  express,
  git,
  gtihub,
  html,
  jquery,
  js,
  mysql,
  node,
  react,
  tailwind,
} from "../components/skills/img";
export const skills = [
  {
    id: 1,
    className: "particle-7 top-4 right-80 w-9 h-9",
    src: tailwind,
    alt: "tailwindcss",
  },
  {
    id: 2,
    className: "particle-6 top-4 left-80 w-10 h-10 bg-black rounded-full",
    src: js,
    alt: "javascript",
  },
  {
    id: 3,
    className: "particle-5 top-32 right-80 w-8 h-8",
    src: react,
    alt: "reactjs",
  },
  {
    id: 4,
    className: "particle-4 top-9 left-48 w-9 h-9",
    src: css,
    alt: "css",
  },
  {
    id: 5,
    className: "particle-2 top-12 right-40 w-8 h-8",
    src: node,
    alt: "nodejs",
  },
  {
    id: 6,
    className: "top-32 left-52 h-10 w-10 bg-white  shadow-custom2 rounded-full",
    src: express,
    alt: "express",
  },
  {
    id: 7,
    className: "particle-1 top-32 left-32 h-10 w-10",
    src: bootstrap,
    alt: "bootstrap",
  },
  {
    id: 8,
    className: "particle-1 top-52 left-80 h-10 w-10",
    src: mysql,
    alt: "mysql",
  },
  {
    id: 9,
    className: "particle-1 top-32 right-40 h-10 w-10",
    src: jquery,
    alt: "jquery",
  },
  {
    id: 10,
    className: "particle-1 bottom-5 top-52 right-52 h-10 w-10",
    src: gtihub,
    alt: "github",
  },
  { id: 11, className: "top-56 left-52 h-10 w-10", src: git, alt: "git" },
  { id: 12, className: "top-32 left-96 h-10 w-10", src: html, alt: "html" },
];
const Skillsdata = () => {
  return <div></div>;
};

export default Skillsdata;
