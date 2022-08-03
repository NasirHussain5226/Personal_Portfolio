import React from "react";

import html from "../assets/Experience/html.png";
import css from "../assets/Experience/css.png";
import javascript from "../assets/Experience/javascript.png";
import reactImage from "../assets/Experience/react.png";
import jQuery from "../assets/Experience/jQuery.png";
import nextjs from "../assets/Experience/nextjs.png";
import laravel from "../assets/Experience/laravel.png";
import github from "../assets/Experience/github.png";
import tailwind from "../assets/Experience/tailwind.png";
import firebase from "../assets/Experience/firebase.png"


const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
      },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-600",
    },
    {
      id: 5,
      src: jQuery,
      title: "jQuery",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-800",
    },
  
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },

  
    {
      id: 8,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: firebase,
      title: "FireBase",
      style: "shadow-yellow-500",
    },

  ];

  return (
    <div className='bg-gradient-to-b from-gray-700 to-black text-white mx-auto h-full w-full pb-12'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-white">
            <div className="pb-7 text-center">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
                <p className="py-5">These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-10 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-700 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className=" w-28 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default Experience;