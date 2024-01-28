import React from "react";
import feedback from "../assets/feedback.svg";
import AI from "../assets/AI.svg";
import download from "../assets/download.svg";
import security from "../assets/security.svg";
import uiux from "../assets/uiux.svg";
import { motion } from "framer-motion";

const Features = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
        staggerDirection: 2,
      },
    },
  };
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

  const fadeInUp = {
    initial: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };

  return (
    <motion.div  name="features">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-screen text-center text-3xl py-1 pb-0 sm:my-8 mb-0"
      >
        Features
      </motion.div>
      <motion.div
        variants={stagger} animate="animate"
        className="sm:w-11/12 mx-auto my-8 mt-6 md:gap-3  grid sm:grid-cols-2 md:grid-cols-3 place-items-center"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"show"}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: false, amount: 0.7 }}
          className="w-72 h-48  bg-emerald-50 p-2  m-2 rounded shadow-custom transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-emerald-100  duration-150 z-10 "
        >
          <div className="text-lg m-2 flex items-center ">
            <span className="font-bold mx-2 ml-0 ">Instant Feedback</span>{" "}
            <img className="h-12 w-12" src={feedback} alt="" />{" "}
          </div>
          <div className="text-base m-2 mt-0">
            Don't wait for appointments. Get your queries addressed immediately.
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"show"}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: false, amount: 0.7 }}
          className="w-72 h-48  bg-emerald-50 p-2  m-2 rounded shadow-custom transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-emerald-100  duration-150  z-10 "
        >
          <div className="text-lg m-2 flex items-center">
            <span className="font-bold mx-2 ml-0 ">Powered by AI engines</span>{" "}
            <img className="h-12 w-12" src={AI} alt="" />{" "}
          </div>
          <div className="text-base m-2 mt-0">
            We leverage one of the most sophisticated AI platforms to deliver
            precise and reliable responses.
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"show"}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: false, amount: 0.7 }}
          className="w-72 h-48   bg-emerald-50 p-2  m-2 rounded shadow-custom transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-emerald-100  duration-150  z-10 "
        >
          <div className="text-lg m-2 flex items-center">
            <span className="font-bold mx-2 ml-0 ">
              User-Friendly Interface
            </span>{" "}
            <img className="h-12 w-12" src={uiux} alt="" />{" "}
          </div>
          <div className="text-base m-2 mt-0">
            No tech expertise required! A straightforward and efficient user
            experience for all age groups.
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"show"}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: false, amount: 0.7 }}
          className="w-72 h-48   bg-emerald-50 p-2  m-2 rounded shadow-custom transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-emerald-100  duration-150  z-10 "
        >
          <div className="text-lg m-2 flex items-center">
            <span className="font-bold mx-2 ml-0 ">Data Security</span>{" "}
            <img className="h-12 w-12" src={security} alt="" />{" "}
          </div>
          <div className="text-base m-2 mt-0">
            Your health information is safe with us. We prioritize data privacy
            and ensure its encrypted storage and transfer.
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"show"}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: false, amount: 0.7 }}
          className="w-72 h-48  bg-emerald-50 p-2  m-2 rounded shadow-custom transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-emerald-100  duration-150  z-10 "
        >
          <div className="text-lg m-2 flex items-center">
            <span className="font-bold mx-2 ml-0 ">Download & Share</span>{" "}
            <img className="h-12 w-12" src={download} alt="" />{" "}
          </div>
          <div className="m-2 text-base mt-0  z-10 ">
            A unique feature allowing you to save your chat interactions. It's
            like having a medical journal at your
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
