import React from "react";
import sideImg from "../assets/sideimage.png";
const Introduction = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="  m-3 ">
          <img src={sideImg} alt="" className="p-2" />
        </div>
        <div className="  w-screen m-4 mt-0 p-3 flex flex-col items-center">
          <div className="text-4xl my-2 text-center">
            Your Medical Companion, Anytime, Anywhere...
          </div>

          <div className="text-2xl text-slate-500 my-1 text-center">
            <p className="">
              {" "}
              Revolutionizing healthcare through cutting-edge AI, tailored to
              provide you with accurate medical insights.
            </p>
          </div>
          <div
            className="text-lg w-80 h-20 bg-green-500 rounded-2xl text-center m-auto my-2 p-2 "
            style={{
              background:
                "linear-gradient(to bottom right, #64deb2 0%, #b1f9d8 100%)",
            }}
          >
            Choose Your Plan & Empower Your Health Journey
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
