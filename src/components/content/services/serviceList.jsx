import { motion } from 'framer-motion'
import React from 'react'

function slideDown(delay) {
   return {
    initial:{
      x:'-100%',
      opacity:0
    }, 
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        delay:0.9
      }
    }
   }
}

function fadedown(delay) {
  return {
   initial:{
     x:'-100%',
     y:'100%',
     opacity:0
   }, 
   animate:{
     x:0,
     y:0,
     opacity:1,
     transition:{
       duration:1,
       delay:0.9
     }
   }
  }
}

function fadeUp(delay) {
  return {
   initial:{
     x:'100%',
     y:'100%',
     opacity:0
   }, 
   animate:{
     x:0,
     y:0,
     opacity:1,
     transition:{
       duration:1,
       delay:0.9
     }
   }
  }
}
export default function ServiceList() {
  return (
    <div>
      <div className="">
        <div className="space-y-6 px-28">
            <h1>Decouvrer Nos sercives</h1>
            <div className="">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-5  overflow-hidden ">
                    <motion.div 
                    variants={slideDown(1)}
                    initial="initial"
                    whileInView="animate"
                    className="h-48  shadow rounded item_1 bg-gray-200 flex items-center px-12">services</motion.div>
                    <motion.div
                     variants={fadedown(2)}
                     initial="initial"
                     whileInView="animate" className="h-48  shadow rounded item_2 bg-gray-200 flex items-center px-12">services</motion.div>
                    <motion.div
                     variants={fadeUp(3)}
                     initial="initial"
                     whileInView="animate"
                    className="h-48  shadow rounded item_3 bg-gray-200 flex items-center px-12">services</motion.div>
                    <motion.div 
                     variants={slideDown(5)}
                     initial="initial"
                     whileInView="animate"
                    className="h-48  shadow rounded  item_4 bg-gray-200 flex items-center px-12">services</motion.div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
