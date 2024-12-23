import { animate, motion } from 'framer-motion'
import React from 'react'

export default function Card({image,title,des,price}) {
  function slideUp(delay) {
      return {
        initials: {
          y:"-100%",
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
  return (
    <div>
      <div className="">
        <motion.div
        variants={slideUp(1)}
        initial="initial"
        animate="animate"
        className="lg:w-[250px] md:w-[330px] bg-gray-50 shadow-md rounded-md ">
            <img src={image} alt=""  className='rounded-tr-md w-full rounded-tl-md'/>
            <div className="bg- mt-4 py-4 px-2">
                <div className="flex items-center justify-between">
                  <h1>{title}</h1>
                    <p>{price} <span>Fcfa</span> </p>
                </div>
                <p>{des}</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}
