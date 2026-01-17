import React from 'react'
import Heading from './Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import Customer1 from '../assets/customer1.jpg'
import Customer2 from '../assets/customer2.jpg'
import Customer3 from '../assets/customer3.jpg'
import Customer4 from '../assets/customer4.jpg'
import Customer5 from '../assets/customer5.jpg'
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section>
            <div className="max-w-350 mx-auto px-10 py-20">
                <Heading highlight='Customers' Heading='Saying' />

                <div className="py-5 flex justify-end gap-x-2">
                    <button className='custom-prev bg-zinc-200 text-2xl rounded-lg p-2 text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white'>
                        <IoIosArrowBack />
                    </button>
                    <button className='custom-next bg-zinc-200 text-2xl rounded-lg p-2 text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white'>
                        <IoIosArrowForward />
                    </button>
                </div>

                <Swiper 
                navigation={{
                    nextEl:".custom-next",
                    prevEl:".custom-prev"
                }} 
                loop={true}
                breakpoints={{
                    640:{slidesPerView:1, spaceBetween:20},
                    768:{slidesPerView:2, spaceBetween:20},
                    1024:{slidesPerView:3, spaceBetween:20}
                }}
                modules={[Navigation, Autoplay]} className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction:false,
                }}    
                >
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                                    <div className='flex gap-5 items-center'>
                                        <div className="w-16 h-16 rounded-full bg-red-300 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                                            <img src={item.image} alt="Customer_img" className='h-full w-full'/>
                                        </div>
                                        <div className="">
                                            <h5 className="text-xl font-bold">{item.name}</h5>
                                            <p className='text-zinc-600'>{item.profession}</p>
                                            <span className='flex text-amber-400 mt-3 gap-1 text-xl'>
                                                {Array.from({length: item.rating}, (_,index)=>(
                                                       <FaStar key={index}/>
                                                ))}             
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-10 min-h-[15vh]">
                                        <p className="text-zinc-600">{item.para}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials


const review = [
    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        rating: 3,
        para: 'Grocify is my go-to store for all grocery needs. Their product is always fresh ,and the delivery is super fast. I love the user-friendly interface and veriety of organic options!',
        image: Customer1
    },
    {
        id: 2,
        name: 'Devid Smith',
        profession: 'Chef',
        rating: 5,
        para: 'As a chef, quality ingredients are everything. Grocify Consistently delievers the best vegetables, herbs, and pantry stables. Highly recommended!',
        image: Customer2
    },
    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        rating: 3,
        para: 'Shopping online with Grocify has saved me so much time. I trust them for my family weekly groceryies-always fresh, affortable, and reliable.',
        image: Customer3
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 4,
        para: 'I appreciate the selection of healthy foods and clean label producs. Grocify has been a greate parter in my wellness journey!',
        image: Customer4
    },
    {
        id: 5,
        name: 'Hatcha Phongchi',
        profession: 'Nutritionist',
        rating: 3,
        para: 'Grocify offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch',
        image: Customer5
    }
]