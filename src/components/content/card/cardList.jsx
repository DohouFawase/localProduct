import React from 'react'
import head from "../../../assets/bg1.jpg"
import Card from './card'
import { motion } from 'framer-motion'

const ProductList = [
    {
        id: 1,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head,
        delay: 0.1
    },

    {
        id: 2,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head,
        delay: 0.2
    },

    {
        id: 3,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head,
        delay: 0.3
    },

    {
        id: 4,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head,
        delay: 0.4
    },

    {
        id: 5,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head,
        delay: 0.4
    },

    {
        id: 6,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head,
        delay: 0.5
    },

    {
        id: 7,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head,
        delay: 0.6
    },

    {
        id: 8,
        title:"Egg",
        price:"500",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
        image:head, 
        delay: 0.7
    },

]
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

 

export default function CardList() {
  return (
    <div>
       <motion.div
      
        className="px-28 mt-12 ">
        <div className=" ">
            <div className=" space-y-2">
                <motion.h1
                variants={fadeIn(1)}
                initial="initial"
                whileInView="animate"
                 className='font-bold text-3xl -tracking-tight'>Ferme 3P Product</motion.h1>
                <motion.p
                 variants={slideUp(1.5)}
                 initial="initial"
                 whileInView="animate">Lorem ipsum, dolor sit amet consectetur  adipisicing elit.<br /> Quidem sed eaque animi.</motion.p>
            </div>
        </div>
        <motion.div
  

        className="grid md:grid-cols-2 lg:grid-cols-4 
          mt-6
        gap-4">
        {
            ProductList.map((product) => {
                return (
                    <>
                    <Card key={product.id} image={product.image} price={product.price} title={product.title} des={product.des} />
                    </>
                )
            })
        }
        </motion.div>
       </motion.div>
    </div>
  )
}
