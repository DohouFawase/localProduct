import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { BiCart } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const navigation = [
    {
        title:"Produits",
        link:"#",
        delay:0.1,
    },

    {
        title:"Services",
        link:"#",
        delay:0.2,


    },

    {
        title:"Formations",
        link:"#",
        delay:0.3,

    },

    {
        title:"Consultation",
        link:"#",
        delay:0.4,

    },

    {
        title:"Contact",
        link:"#",
        delay:0.5,

    },
]
function SlideDown (delay) {
    return {
        initial:{
            y: "-100%",
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

export default function NavBar() {
    
    const [darg, SetDarg] = useState(false)

    function dragMobile() {
      console.log('clique')
      SetDarg(!darg)
    }
  return (
    <div className='lg:px-12 py-2 '>
        <div className="flex justify-between items-center p-3">
            <div className="flex items-center gap-x-8">
               <motion.div
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:0.8, delay:0.5}}
               className="">
               <NavLink to={""}>
                   
                   Ferme 3P
                
               </NavLink>
               </motion.div>

                <nav>
                <ul className='hidden lg:flex items-center gap-4'>
                    {
                        navigation.map((link)=> {
                            return(
                                <>
                                <motion.li key={link}
                                variants={SlideDown(link.delay)}
                                initial= "initial"
                                animate="animate"
                                data-delay={link.delay}
                                > 
                                    <NavLink to={link.link}>{link.title}</NavLink>
                                </motion.li>
                                </>
                            )
                        })
                    }
                </ul>
            </nav>
            </div>

           

            <div className="">
                <motion.div
                variants={SlideDown(1)}
                 initial= "initial"
                                animate="animate"
                 className="lg:flex items-center gap-3 relative">
                    <div className="hidden lg:flex gap-4">
                        <input type="text" />
                        <button>Search</button>
                    </div>
                    <button className='md:block hidden'><BiCart size={25} /></button>
                    <button className='md:hidden' onClick={dragMobile}><FaBars size={25} /></button>
                    {
                        darg && (
                            <>
                            hello
                            </>
                        )
                    }
                     
                    {/* <div className={`flex flex-col absolute ${darg ? 'translate-x-0' : 'translate-x-full'}`}>
                            bonjour
                    </div> */}
                 
                </motion.div>
            </div>
        </div>    
    </div>
  )
}
