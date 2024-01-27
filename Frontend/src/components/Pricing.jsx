import React from "react";

const Pricing = () => {
  return (
    <div name="pricing">
      <div className="text-3xl text-center text-dlate-900 py-3">Pricing</div>
      <div className="container  bg-emerald-100 m-auto rounded-3xl flex flex-col sm:flex-row items-center justify-center shadow-custom">
        <div className="w-80  p-4">
          <h2 className="text-3xl font-bold mb-3 mt-0">
            <i className="fa-solid fa-play text-2xl"></i> Free Trial
          </h2>
          <div className="pl-5 text-xl">
            <p>
              <i className="fa-regular fa-circle-check"></i> One User
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> Limited queries
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> Download Chat
            </p>
          </div>
          <button className="p-2 text-lg  rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-pink-500 hover:to-yellow-500   w-32 m-2 ml-0 mt-3 shadow-custom shadow-custom transition ease-in-out  hover:scale-110   duration-150 hover:text-white hover:font-bold ">
            Start Now
          </button>
        </div>
        <div className="sm:w-80  p-4 pl-10 sm:pl-4">
          <h2 className="text-3xl font-bold mb-3 mt-0">
            {" "}
            <i className="fa-solid fa-crown text-yellow-500"></i> Premium
          </h2>
          <div className="pl-5 text-xl">
            <p>
              <i className="fa-regular fa-circle-check"></i> Up to five users
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> Unlimited queries
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> Download Chat
            </p>
          </div>
          <button className="p-2 text-lg w-40  rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-pink-500 hover:to-yellow-500   m-2 ml-0 mt-3 shadow-custom shadow-custom transition ease-in-out  hover:scale-110   duration-150 hover:text-white hover:font-bold ">
            Comming Soon
          </button>
        </div>
        <div className="sm:w-80  p-4">
          <h2 className="text-3xl font-bold mb-3 mt-0">
            <i className="fa-regular fa-building text-2xl"></i> Enterprise
          </h2>
          <div className="pl-5 text-xl">
            <p>
              <i className="fa-regular fa-circle-check"></i> As per your
              requirements
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> 24/7 support
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> API
            </p>
          </div>
          <button className="p-2 text-lg  rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-pink-500 hover:to-yellow-500   w-32 m-2 ml-0 mt-3 shadow-custom shadow-custom transition ease-in-out  hover:scale-110   duration-150 hover:text-white hover:font-bold ">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
