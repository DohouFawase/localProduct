import React from 'react'
import Image1 from "../../../assets/imge1.jpg"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Blog() {
    function fadeInLeft(delay) {
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
  return (
    <div className='px-24'>
      <div className="">
        <p>Decoivrez les tendences</p>
        <p>Nos dernier  arcticle puvlibiler</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
            <motion.div
            variants={fadeInLeft(1)}
            initial="initial"
            whileInView="animate"
             className="">
            <img src={Image1} alt="" />

                <div className="">
                    <div className="">
                        <p>Dansou Jack</p>
                        <p>23-02-2024</p>
                    </div>
                    <h1>Comment Entretenir les Poussion</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, rem.</p>
                </div>
            </motion.div>

            <motion.div
            variants={fadeInLeft(2)}
            initial="initial"
            whileInView="animate"
             className="rounded shadow ">
                <img src={Image1} alt="" />
                <div className="space-y-1 px-4 mt-2">
                    <div className="flex justify-between items-center">
                        <p>Dansou Jack</p>
                        <p>23-02-2024</p>
                    </div>
                    <h1>Comment Entretenir les Poussion</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, rem.</p>
                </div>
                <div className="">
                <NavLink>
                    Vois plus
                </NavLink>
                </div>
            </motion.div>

            <motion.div 
            variants={fadeInLeft(3)}
            initial="initial"
            whileInView="animate"
            className="">
            <img src={Image1} alt="" />

                <div className="">
                    <div className="">
                        <p>Dansou Jack</p>
                        <p>23-02-2024</p>
                    </div>
                    <h1>Comment Entretenir les Poussion</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, rem.</p>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}
