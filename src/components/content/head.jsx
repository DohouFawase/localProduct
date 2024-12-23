import React from 'react'
import { NavLink } from 'react-router-dom'
import head from "../../assets/bg1.jpg"
import { motion } from 'framer-motion'
function slideUp (delay) {
  return {
      initial:{
          y: "100%",
          opacity:0
      },
      animate: {
          y:0,
          opacity:1,
          transition:{
                  duration:0.8,
                  delay:delay, 
          }
      }
  }
}

function fadeIn (delay) {
  return {
      initial:{
          x: "-100%",
          opacity:0
      },
      animate: {
          x:0,
          opacity:1,
          transition:{
                  duration:0.8,
                  delay:delay, 
          }
      }
  }
}


export default function Head() {
  return (
    <div>
      <div className="">
        <div className="h-[550px] relative overflow-hidden ">
            <motion.img 
            variants={slideUp(1)}
            initial="initial"
            whileInView="animate"
            
            src={head} className='h-[550px] object-cover w-full' alt="" />
            
            <motion.div 
            
             className="md:px-24 absolute space-y-4 top-[200px]">
                <motion.h3
                variants={fadeIn(2)}
                initial="initial"
                whileInView="animate"
                >Next step your </motion.h3>
                <motion.h1
                variants={slideUp(2.5)}
                 initial="initial"
                 whileInView="animate"
                 className='md:w-[23rem] w-[20rem]  font-bold text-3xl'>Le poulet Local 100% Africain votre Santé Notre Priorité</motion.h1>
               <motion.div
                variants={slideUp(3)}
                initial="initial"
                whileInView="animate"
               className="">
               <NavLink
                to={"#"}>Prendre Contact</NavLink>
               </motion.div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}
