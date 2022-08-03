import React from 'react'
import HeroImage from "../assets/MyHeroImage.png";
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center md:items-start items-center h-full sm:mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white ">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3+ years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            ReactJs, Tailwind.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white bg-gradient-to-r from-pink-400 to-pink-700 rounded-md w-fit py-2 px-3 my-2 flex items-center cursor-pointer text-lg"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-full mb-10 md:mb-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;