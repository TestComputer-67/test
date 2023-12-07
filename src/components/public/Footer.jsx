import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
      <div className="container flex flex-col justify-around max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
        <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
          <a
            href="/"
            className="flex justify-center block text-left sm:text-center lg:text-left  lg:justify-start"
          >
            <span className="flex items-start sm:items-center">
              <SlCalender className="w-12 h-12  text-indigo-500" />
            </span>
          </a>
        </div>
        <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
          <div className="flex flex-col w-full text-gray-700">
            <div className="inline-block px-3 py-2 mt-5 font-bold text-gray-800 uppercase md:mt-0 text-center lg:text-end">
              Bize Ulaşın
            </div>
            <div className="flex justify-center lg:justify-end pl-4 mt-2">
              <a
                className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/koray-f-7695782a3/"
              >
                <FaLinkedin className="w-5 h-5 fill-current" />
              </a>
              <a
                className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <FaGithub className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pt-6 mt-10 text-center text-gray-500 border-t border-gray-100">
        © 2023 Koray. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
