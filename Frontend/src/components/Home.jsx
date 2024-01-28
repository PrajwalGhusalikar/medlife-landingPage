import React from "react";
import sideImg from "../assets/sideimage.png";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-scroll";
const Home = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
    animate: {
      y: 5,
      opacity: 1,
      transition: {
        duration: 2,
        ease: easing,
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      name="home"
      className="h-screen flex flex-col sm:flex-row w-screen items-center justify-evenly pt-10 sm:p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: easeInOut }}
        className="flex flex-col sm:flex-row justify-evenly items-center "
      >
        <div className="  m-3 sm:hidden ">
          <img src={sideImg} alt="" className="p-2 " />
        </div>
        <div className="  w-screen sm:w-1/2 m-4 sm:mt-4 p-3 flex flex-col  items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeInOut }}
            className="text-3xl sm:text-4xl text-center mb-2 sm:my-4 "
            style={{ color: "#554869" }}
          >
            Your Medical Companion, Anytime, Anywhere...
          </motion.div>

          <motion.div
            initial={{ opacity: 0.6, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-xl text-slate-500 my-2  text-center"
          >
            <p className="">
              {" "}
              Revolutionizing healthcare through cutting-edge AI, tailored to
              provide you with accurate medical insights.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, delay: 0, ease: easeOut },
            }}
            className="text-base w-72 h-16 rounded-2xl text-center m-auto mt-4 p-2  shadow-custom transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-emerald-100  duration-150 cursor-pointer   "
            style={{
              background:
                "linear-gradient(to bottom right, #64deb2 0%, #b1f9d8 100%)",
            }}
          >
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Choose Your Plan & Empower Your Health Journey
            </Link>
          </motion.div>
        </div>
        <div className="  m-3 hidden sm:block h-[500] w-[500] ">
          <img src={sideImg} alt="" className="p-2 " />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
