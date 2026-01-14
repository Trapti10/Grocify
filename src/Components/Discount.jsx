import React from 'react'
import Button from './Button/Button'
import freshFruits from '../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className="bg-zinc-100 bg-right bg-contain bg-no-repeat mr-0" style={{backgroundImage:`url(${freshFruits})`}}>
        <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-350 mx-auto px-10 py-10">
            <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90  md:self-center">20%</span>
            <div className="max-w-175">
                <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">First Order Discount!</h3>
                <p className='text-zinc-600 my-6'>
                    Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
                </p>
                <Button text="Get a discount"></Button>
            </div>
        </div>
    </section>
  )
}

export default Discount