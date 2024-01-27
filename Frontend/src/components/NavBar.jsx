import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white h-12 w-100% flex justify-between items-center p-2 fixed w-screen z-20">
        <div className="w-40 text-start pl-2 text-2xl text text-slate-900 bold flex  shadow-custom transition ease-in-out  hover:scale-110   duration-150 cursor-pointer  ">
          <img src={logo} alt="logo" className="h-5 w-5" />
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            medlife.ai
          </Link>{" "}
        </div>
        <div className="sm:w-96 hidden sm:flex justify-evenly">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  shadow-custom transition ease-in-out  hover:scale-110   duration-150 text-lg "
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  shadow-custom transition ease-in-out  hover:scale-110   duration-150  text-lg"
          >
            Features
          </Link>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  shadow-custom transition ease-in-out  hover:scale-110   duration-150 text-lg "
          >
            Pricing
          </Link>
        </div>
        <div className="w-32 text-end pr-4 text-lg text-slate-900 bold shadow-custom transition ease-in-out  hover:scale-110 cursor-pointer   duration-150">
          <i className="fa-solid fa-user "></i> sign in
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
