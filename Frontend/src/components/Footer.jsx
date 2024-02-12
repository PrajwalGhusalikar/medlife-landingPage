import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333333" }}>
      <div className="w-screen mt-4 flex flex-col sm:flex-row justify-between sm:items-center p-4">
        <div className="w-60  flex text-white hover:cursor-pointer">
          <img src={Logo} alt="" className="h-16 w-16" />
          <div className="w-40">
            <h2 className="text-xl font-inder">medlife.ai</h2>
            <p className="font-extralight">converse for wellness</p>
          </div>
        </div>
        <div className="sm:w-[900] grid grid-cols-4 sm:mx-5 text-start font-inder">
          <a
            href="/"
            target="_blank"
            className="text-sm text-white mx-2 p-1 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            Pre-sale FAQ’s
          </a>
          <a
            href="/"
            target="_blank"
            className="text-sm text-white mx-2 p-1 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            Services
          </a>
          <a
            href="/"
            target="_blank"
            className="text-sm text-white mx-2 p-1 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            About Us
          </a>
          <a
            href="/"
            target="_blank"
            className="text-sm  text-white mx-2 sm:w-28 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            Submit a Ticket
          </a>
          <a
            href="/"
            target="_blank"
            className="text-sm text-white mx-2 p-1 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            Support
          </a>
          <a
            href="/"
            target="_blank"
            className="text-sm text-white mx-2 p-1 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            Contact
          </a>
          <a
            href="/"
            target="_blank"
            className="text-sm text-white mx-2 p-1 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            Affiliates
          </a>
          <a
            href="/"
            target="_blank"
            className="text-sm text-white mx-2 p-1 hover:cursor-pointer hover:underline hover:font-semibold"
          >
            Resources
          </a>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center text-white text-2xl text-center ">
        <a
          href="/"
          target="_blank"
          className="w-10 h-10 transition ease-in-out  hover:scale-125   duration-150"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="/"
          target="_blank"
          className="w-10 h-10 transition ease-in-out  hover:scale-125   duration-150"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="/"
          target="_blank"
          className="w-10 h-10 transition ease-in-out  hover:scale-125   duration-150"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a
          href="/"
          target="_blank"
          className="w-10 h-10 transition ease-in-out  hover:scale-125   duration-150"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="text-xs text-center text-gray-500 hover:text-white hover:font-semibold cursor-pointer pb-4">
        © Vikram Sethi Contact : vikram@vikramsethi.com
      </div>
    </footer>
  );
};

export default Footer;
