import React from "react";
import sideImg from "../assets/sideimage.png";
const Introduction = () => {
  return (
    <div name="home">
      <div className="flex flex-col sm:flex-row justify-evenly items-center pt-20">
        <div className="  m-3 sm:hidden ">
          <img src={sideImg} alt="" className="p-2 " />
        </div>
        <div className="  w-screen sm:w-1/2 m-4 sm:mt-4 p-3 flex flex-col  items-center">
          <div className="text-3xl sm:text-4xl text-center mb-2 sm:my-4 " style={{color:"#554869"}}>
            Your Medical Companion, Anytime, Anywhere...
          </div>

          <div className="text-xl text-slate-500 my-2  text-center">
            <p className="">
              {" "}
              Revolutionizing healthcare through cutting-edge AI, tailored to
              provide you with accurate medical insights.
            </p>
          </div>
          <div

            className="text-base w-72 h-16 rounded-2xl text-center m-auto mt-4 p-2  shadow-custom transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-emerald-100  duration-150 cursor-pointer   "
            style={{
              background:
                "linear-gradient(to bottom right, #64deb2 0%, #b1f9d8 100%)",
            }}
          >
            Choose Your Plan & Empower Your Health Journey
          </div>
        </div>
        <div className="  m-3 hidden sm:block h-[500] w-[500] ">
          <img src={sideImg} alt="" className="p-2 " />
        </div>
      </div>
    </div>
  );
};

export default Introduction;