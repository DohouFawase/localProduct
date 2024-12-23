import { motion } from "framer-motion";
import { use } from "framer-motion/m";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

const media = [
    {
        title:"Facebook",
        link:"#",
        delay:0.1,
    },

    {
        title:"Twitter",
        link:"#",
        delay:0.2,


    },

    {
        title:"Instagram",
        link:"#",
        delay:0.3,

    },

    {
        title:"Whatsapp",
        link:"#",
        delay:0.4,

    },
    {
        title:"illusionyx@gamil.com",
        link:"#",
        delay:0.4,  
    }

   
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
export default function Footer() {
    const years = new Date().getFullYear();
 
    const [data, setData]= useState({
        email: ""
    })
    const [error, setError] = useState({})

    function handleError () {
        let err = {}
        if(data.email === '') {
            err.email ===  'Veillez une email validie'
        }
        setError(err)
        return Object.keys(err) ===0
    }
 
    function onchange(e) {
        setData({
            ...data,
            [e.target.value ]:e.target.name
        })
    }

    function handleEvente(e) {
        e.preventDefault()
         const Validate = handleError()

         if(Validate) {
            alert('nom')
         }
        console.log('click')
}
  return (
    <div className="mt-24 bg-[#cc8c47] text-white">
     <div className="pt-12 ">
     <div className="px-24 pb-5 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
          <div className="space-y-2">
            <h1 className="font-bold text-xl text-black  ">PE FERMER</h1>
            <p className="text-wrap">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis quaerat voluptate unde, quam hic illo.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-xl text-black  ">Liens</h1>
            <div className="">
            <ul className='flex flex-col gap-4'>
                    {
                        navigation.map((link)=> {
                            return(
                                <>
                                <motion.li key={link}
                                variants={SlideDown(link.delay)}
                                initial= "initial"
                                whileInView="animate"
                                data-delay={link.delay}
                                > 
                                    <NavLink to={link.link}>{link.title}</NavLink>
                                </motion.li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-xl text-black  ">Media sociaux</h1>
            <div className="">
            <ul className='flex flex-col gap-4'>
                    {
                        media.map((link)=> {
                            return(
                                <>
                                <motion.li key={link}
                                variants={SlideDown(link.delay)}
                                initial= "initial"
                                whileInView="animate"
                                data-delay={link.delay}
                                > 
                                    <NavLink to={link.link}>{link.title}</NavLink>
                                </motion.li>
                                </>
                            )
                        })
                    }
                </ul> 
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-xl text-black  ">Abonnez-vous pour ne pas <br /> manquer de nouvelle </h1>
            <div className="">
                <form onSubmit={handleEvente} className="flex items-center gap-2 relative w-full">
                    <input type="email" name="" onChange={onchange} className="border border-gray-200 rounded-md w-full text-black px-2 outline-none p-2" />
                    <button  className="border  text-black bg-[#cc8c47]   border-gray-200 rounded-md outline-none p-2"  >Abonnez</button>
                    {error.email && <p className="text-red-500">{error.email}</p>}
                </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="">
        <div className="p-2 bg-black text-white text-center">
            <p className="text-sm"> copyrigh all reserve {years} Coding and design by <a href="">Fawase DOHOU</a></p>
        </div>
      </div>
     </div>
    </div>
  );
}
