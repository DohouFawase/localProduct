import React from "react";
import about from "./../../assets/bg2.jpg";
import { BiCheck } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { delay, motion } from "framer-motion";

export default function About() {
  function fadeInLeft(delay) {
    return {
      initial: {
        x: "100%",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,

        transition: {
          duration: 0.8,
          delay: delay,
        },
      },
    };
  }

  function fadeInRight(delay) {
    return {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,

        transition: {
          duration: 0.8,
          delay: delay,
        },
      },
    };
  }

  function fadeUp (delay) {
    return {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,

        transition: {
          duration: 0.9,
          delay: delay,
        },
      },
    };
  }

  function fadedown (delay) {
    return {
      initial: {
        y: "100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,

        transition: {
          duration: 0.9,
          delay: delay,
        },
      },
    };
  }
  return (
    <div className="px-28">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <motion.div
            variants={fadeInRight(1)}
            initial="initial"
            whileInView="animate"
            className=""
          >
            <img src={about} alt="" className="" />
          </motion.div>
          <motion.div 
          variants={fadeInLeft(1)}
          initial="initial"
          whileInView="animate"
           className="flex flex-col space-y-4">
            <div className="">
              <motion.p
             variants={fadeUp(1)}
             initial='initial'
             whileInView="animate"

              > Apropos</motion.p>
              <motion.h1 
                 variants={fadeUp(2)}
                 initial='initial'
                 whileInView="animate"
              className="font-bold text-3xl tracking-wide">Ferme 3P</motion.h1>
            </div>
            <motion.p
               variants={fadeUp(3)}
               initial='initial'
               whileInView="animate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,{" "}
              <br /> nihil praesentium? Iusto.
            </motion.p>
            <motion.div
               variants={fadeUp(4)}
               initial='initial'
               whileInView="animate"
            className="space-y-4">
              <div className="flex items-center  gap-4">
                <BiCheck color="#fd9146" />
                <p>Vente du poulet Fumé</p>
              </div>

              <div className="flex items-center  gap-4">
                <BiCheck color="#fd9146" />
                <p>Vente des reproducteur</p>
              </div>

              <div className="flex items-center  gap-4">
                <BiCheck color="#fd9146" />
                <p>Formation en ligne et En presentiesel</p>
              </div>

              <div className="flex items-center  gap-4">
                <BiCheck color="#fd9146" />
                <p>Consultation de Project et accompagnements Technique</p>
              </div>
            </motion.div>
            <motion.div 
             variants={fadedown(5)}
             initial='initial'
             whileInView="animate"
            className="">
              <NavLink
                className={
                  "bg-[#fd9146] text-white p-2 text-center rounded-md px-6 hover:shadow transition-shadow"
                }
              >
                Voire Plus
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
