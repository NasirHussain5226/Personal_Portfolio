import React from "react";
import formImage from "../assets/form.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center gap-9 flex-wrap">
            <div className="flex justify-center items-center mx-auto p-10 hover:scale-105 duration-300">
                <img src={formImage} alt="Message" className=" -rotate-45 h-full w-full"/>
            </div>
          <form
            action="https://getform.io/f/a132d627-c0f1-4075-a85d-365042329b66"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-s"
            required/>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-s"
            required/>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-s"
            required></textarea>

            <button className="text-white bg-gradient-to-r from-pink-400 to-pink-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;