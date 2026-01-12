import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa";
import { FaShield } from 'react-icons/fa6';
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValues = value.slice(0, 2).map(item=>{
      return (
        <div className="flex md:flex-row-reverse items-center gap-7">
            <div >
                <span className='flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 w-14 h-14 rounded-full text-white text-2xl'>{item.icon}</span>
            </div>
            <div className="md:text-right ">
                <h3 className='text-3xl text-zinc-800 font-bold'>{item.title}</h3>
                <p className='text-md text-zinc-600 mt-2'>{item.para}</p>
            </div>
        </div>
      )
    })
    const rightValues = value.slice(2, 4).map(item=>{
      return (
        <div className="flex flex-row items-center gap-7">
            <div >
                <span className='flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 w-14 h-14 rounded-full text-white text-2xl'>{item.icon}</span>
            </div>
            <div className="mdtext-left">
                <h3 className='text-3xl text-zinc-800 font-bold'>{item.title}</h3>
                <p className='text-md text-zinc-600 mt-2'>{item.para}</p>
            </div>
        </div>
      )
    })
   

    return (
        <section>
            <div className="max-w-350 mx-auto px-10 py-20">
                <Heading highlight='Our' Heading="Values" />
                <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
                    {/* Left values */}
                    <div className="md:min-h-100 flex flex-col justify-between gap-15">
                       {leftValues}
                    </div>

                    {/* Basket img */}
                    <div className="md:flex hidden w-1/2">
                    <img src={Basket} alt="Basket" />
                    </div>
                    
                    {/* Right values */}
                    <div className="md:min-h-100 flex flex-col justify-between gap-15">
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
         title: "Trust",
         para: "We build trust by delivering quality products, transparent pricing, and a smooth shopping experience every time.",
         icon: <FaHeart />
    },
    {
        id: 2,
         title: "Always Fresh",
         para: "Our fruits, vegetables, and groceries are sourced daily to ensure you receive only the freshest items at your doorstep.",
         icon: <FaLeaf />
    },
    {
        id: 3,
         title: "100% Organic",
         para: "We offer carefully selected organic products that are grown naturally without harmful chemicals or additives.",
         icon: <FaShield/>
    },
    {
        id: 4,
         title: "Food Safety",
         para: "From sourcing to delivery, we follow strict hygiene and safety standards to keep your food healthy and safe.",
         icon: <FaSeedling />
    }
]