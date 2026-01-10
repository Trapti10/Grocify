import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    
    return (
        <section>
            <div className="max-w-350 min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35">
                {/* Hero content */}
                <div className="flex-1">
                    <span className='bg-orange-200 text-amber-600 px-3 py-1 border-none rounded-full text-lg'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold'>Tasty Oraganic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br /> In Your City</h1>
                    <p className="text-zinc-600 md:text-lg text-md mt-5 mb-10 ">Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                   <Button text='Shop Now'/>
                </div>
                {/* Hero image */}
                <div className="flex-1">
                    <img src={Grocery} alt="Hero img" />        
                </div>
            </div>

        </section>
    )
}

export default Hero
