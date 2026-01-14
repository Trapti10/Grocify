import React from 'react'
import Heading from './Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Testimonials = () => {
  return (
    <section>
        <div className="max-w-350 mx-auto px-10 py-20">
            <Heading highlight='Customers' Heading='Saying'/>

        <div className="py-5 flex justify-end gap-x-2">
           <button className='bg-zinc-200 text-2xl rounded-lg p-2 text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white'>
             <IoIosArrowBack/>
           </button>
           <button className='bg-zinc-200 text-2xl rounded-lg p-2 text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white'>
             <IoIosArrowForward/>
           </button>
            </div>

{/* Cards */}
            {/* <div className="bg-zinc-100 rounded-xl p-8">
             <div className='flex gap-5 items-center'>
                <div className="w-16 h-16 rounded-full bg-red-300 outline-2 outline-orange-500 outline-offset-4"></div>
                <div className="">
                    <h5 className="text-xl font-bold">Name</h5>
                   <p className='text-zinc-600'>Profession</p>
                   <span>Stars</span>
                </div>
             </div>
                <div className="mt-10">
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, error quis laboriosam omnis saepe maxime.</p>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Testimonials


const review = [
{
    id:1,
    name:'Emily Johnson',
    profession:'Food Blogger',
    rating:3,
    para:'Grocify is my go-to store for all grocery needs. Their product is always fresh ,and the delivery is super fast. I love the user-friendly interface and veriety of organic options!'
},
{
    id:2,
    name:'Devid Smith',
    profession:'Chef',
    rating:5,
    para:'As a chef, quality ingredients are everything. Grocify Consistently delievers the best vegetables, herbs, and pantry stables. Highly recommended!'
},
{
    id:3,
    name:'Alya Zahra',
    profession:'Model',
    rating:3,
    para:'Shopping online with Grocify has saved me so much time. I trust them for my family weekly groceryies-always fresh, affortable, and reliable.',
},
{
    id:4,
    name:'Carlos Mendes',
    profession:'Fitness Coach',
    rating:4,
    para:'I appreciate the selection of healthy foods and clean label producs. Grocify has been a greate parter in my wellness journey!'
},
{
    id:5,
    name:'Hatcha Phongchi',
    profession:'Nutritionist',
    rating:3,
    para:'Grocify offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top'
}
]