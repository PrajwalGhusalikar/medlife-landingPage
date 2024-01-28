import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { easeOut, motion } from "framer-motion";

const NavBar = () => {
  const [toggle, settoggle] = useState("");
  let ref = useRef();

  const easing = [0.6, -0.05, 0.01, 0.99];
  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1,
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
    <motion.div initial="initial" animate="animate">
      <motion.nav className="bg-white h-12 w-screen flex justify-between items-center p-2 fixed  z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1, delay: 0, ease: easeOut },
          }}
          className="w-40 text-start pl-2 text-2xl text text-slate-900 bold flex  shadow-custom transition ease-in-out  hover:scale-110   duration-150 cursor-pointer font-inder"
        >
          <img src={logo} alt="logo" className="h-5 w-5" />
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            medlife.ai
          </Link>{" "}
        </motion.div>
        <motion.div
          variants={stagger}
          className="sm:w-96 hidden sm:flex justify-evenly"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              settoggle(false);
            }}
            className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  transition ease-in-out  hover:scale-110   duration-150 text-lg "
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              settoggle(false);
            }}
            className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  transition ease-in-out  hover:scale-110   duration-150 text-lg "
          >
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Features
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              settoggle(false);
            }}
            className="w-24 text-center cursor-pointer rounded-2xl p-2 hover:bg-emerald-100  transition ease-in-out  hover:scale-110   duration-150 text-lg "
          >
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Plans
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="w-32 text-end sm:pr-4 text-lg text-slate-900 bold shadow-custom transition ease-in-out  hover:scale-110 cursor-pointer   duration-150"
        >
          <i className="fa-solid fa-user "></i> sign in
        </motion.div>

        {toggle ? (
          <div
            onClick={() => {
              settoggle(false);
            }}
            className="  px-2 text-2xl  md:hidden hover:scale-120 cursor-pointer"
          >
            <i ref={ref} className="fa-solid fa-bars text-gray-500 pr-2"></i>
          </div>
        ) : (
          <div
            onClick={() => {
              settoggle(true);
            }}
            className="  px-2 text-2xl  md:hidden hover:scale-120 cursor-pointer"
          >
            <i ref={ref} className="fa-solid fa-bars text-gray-500 pr-2"></i>
          </div>
        )}

        {toggle ? (
          <div
            className="flex text-blue-950 fixed top-0 left-0 right-0 flex-col justify-center items-center text-center opacity-85 h-screen z-10 "
            style={{
              background:
                "linear-gradient(to bottom right, #64deb2 0%, #b1f9d8 100%)",
            }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
              className=" text-4xl   py-7  hover:scale-115 cursor-pointer rounded-2xl text-center font-semi-bold  hover:bg-slate-800 "
            >
              Home
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
              className=" text-4xl py-7 hover:scale-115 cursor-pointer rounded-2xl text-center font-semi-bold  hover:bg-slate-800 "
            >
              Features
            </Link>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
              className=" text-4xl py-7 hover:scale-115 cursor-pointer rounded-2xl text-center font-semi-bold  hover:bg-slate-800 "
            >
             Our Plans
            </Link>
          </div>
        ) : (
          " "
        )}
      </motion.nav>
    </motion.div>
  );
};

export default NavBar;
