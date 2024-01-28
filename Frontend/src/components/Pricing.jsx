import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: 0,
        ease: easing,
      },
    },
  };

  return (
    <div name="pricing">
      <div className="text-3xl text-center text-dlate-900 py-3">Our Plans</div>
      <div
        className="container sm:w-[800px] bg-emerald-100 m-auto rounded-3xl flex flex-col sm:flex-row items-center justify-center shadow-custom"
        style={{ color: "#302D7A" }}
      >
        <div className="w-80  p-4 flex flex-col items-center ">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView={"show"}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: false, amount: 0.7 }}
            className=" w-[168px] sm:w-auto"
          >
            <h2 className="text-2xl font-bold mb-3 mt-0">
              <i className="fa-solid fa-play text-2xl"></i> Free Trial
            </h2>
            <div className="pl-5 text-base">
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i>{" "}
                One User
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i>{" "}
                Limited queries
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i>{" "}
                Download Chat
              </p>
            </div>
            <button className="p-2 w-40 text-lg  rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-pink-500 hover:to-yellow-500  m-2 ml-0 mt-3 shadow-custom shadow-custom transition ease-in-out    duration-150 hover:text-white hover:font-bold ">
              Start Now
            </button>
          </motion.div>
        </div>
        <div className="w-80  p-4 pl-4 flex flex-col items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView={"show"}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: false, amount: 0.7 }}
            className=" w-[168px] sm:w-auto"
           
          >
            <h2 className="text-2xl font-bold mb-3 mt-0">
              {" "}
              <i className="fa-solid fa-crown text-yellow-500"></i> Premium
            </h2>
            <div className="pl-5 text-base">
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i> Up
                to five users
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i>{" "}
                Unlimited queries
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i>{" "}
                Download Chat
              </p>
            </div>
            <button className="p-2  text-lg w-40  rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-pink-500 hover:to-yellow-500   m-2 ml-0 mt-3 shadow-custom shadow-custom transition ease-in-out  duration-150 hover:text-white hover:font-bold ">
              Comming Soon
            </button>
          </motion.div>
        </div>
        <div className="w-80 p-4 flex flex-col items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView={"show"}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: false, amount: 0.7 }}
            className=" w-[168px] sm:w-auto"
           
          >
            <h2 className="text-2xl font-bold mb-3 mt-0">
              <i className="fa-regular fa-building text-2xl"></i> Enterprise
            </h2>
            <div className="pl-5 text-base">
              <p className="text-wrap">
                <i className="fa-regular fa-circle-check text-green-500"></i> As
                per your requirements
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i>{" "}
                24/7 support
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-green-500"></i>{" "}
                API
              </p>
            </div>
            <button className="p-2 text-lg w-40 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-pink-500 hover:to-yellow-500 m-2 ml-0 mt-3 shadow-custom shadow-custom transition ease-in-out  duration-150 hover:text-white hover:font-bold ">
              Start Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
