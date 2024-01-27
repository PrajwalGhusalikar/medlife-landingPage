import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white h-12 w-100% flex justify-between items-center">
        <div className="w-40 text-start pl-2 text-2xl text text-slate-900 bold flex  shadow-custom transition ease-in-out  hover:scale-110   duration-150 cursor-pointer  ">
          <img src={logo} alt="logo" className="h-5 w-5" />
          <span>medlife.ai</span>{" "}
        </div>
        <div className="sm:w-96 hidden sm:flex justify-evenly">
          <div className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  shadow-custom transition ease-in-out  hover:scale-110   duration-150 ">
            Home
          </div>
          <div className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  shadow-custom transition ease-in-out  hover:scale-110   duration-150 ">
            Features
          </div>
          <div className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  shadow-custom transition ease-in-out  hover:scale-110   duration-150 ">
            Pricing
          </div>
        </div>
        <div className="w-32 text-center text-2xl text-slate-900 bold shadow-custom transition ease-in-out  hover:scale-110 cursor-pointer   duration-150">
          <i className="fa-solid fa-user text-xl"></i> sign in
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
