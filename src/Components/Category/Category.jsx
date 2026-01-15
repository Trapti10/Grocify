import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import { Link } from 'react-router-dom'
import { path } from 'framer-motion/client'

const Category = () => {

    const renderCards = category.map(card => {
        return (
            // Card
            <div className='flex-1 basis-75' key={card.id}>
                {/* Card img */}
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img className='absolute bottom-0' src={card.image} />
                </div>
                {/* Card content */}
                <div className='bg-gray-100 pt-17 p-8 rounded-xl '>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Link to={card.path} className='bg-linear-to-b from-orange-400 to-orange-600 text-white border-none rounded-lg md:text-lg text-md px-8 py-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
                        See All
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <section className='max-w-350 mx-auto px-10 '>
            <div className="py-20">
                <Heading highlight='Shop' Heading='by Category' />
            </div>
            {/* Category cards */}
            <div className="flex gap-10 md:mt-8 mt-3 flex-wrap">
                {renderCards}
            </div>
        </section>
    )
}

export default Category


const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: "Fresh, organic product sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        image: FruitsCat,
        path:'/fruits'
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: "Wholesome dairy products and free-range eggs. from creamy milk and yogurt to artisanal cheeses",
        image: DairyCat,
        path:'/dairy'
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: "High quality, responsibly sourced meat and seaFood. Choose from fresh cuts, marinated options, and more",
        image: SeaFoodCat,
        path:'/seafood'
    },
]