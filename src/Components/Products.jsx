import React, { useState } from 'react'
import Heading from './Heading/Heading'
import productsList from '../data/productList'
import Cards from './Cards'
import Button from './Button/Button'
import { Link } from 'react-router-dom'

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('All')

    let filteredItems = activeTab === 'All' ? productsList : productsList.filter(item=>item.category === activeTab)

    const renderCards = filteredItems.slice(0, 8).map(product => {
        return (
            <Cards image={product.image} id={product.id} name={product.name} price={product.price}/>
        )
    })

    return (
        <section className='max-w-350 mx-auto px-10 py-5'>
            <Heading highlight='Our' Heading='Products' />

            {/* Tabs */}
            <div className='flex flex-wrap gap-3 justify-center items-center mt-10'>
                {categories.map(category => {
                    return (
                        <button key={category} className={` text-lg px-5 py-2 rounded-lg cursor-pointer  
                        ${activeTab === category ? 'text-white bg-linear-to-b from-orange-400 to-orange-500' : 'bg-zinc-200'}`}
                            onClick={() => setActiveTab(category)}>
                            {category}

                        </button>
                    )
                })}
            </div>
            {/* Product Listing */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-9 mt-20">
                {renderCards}
            </div>

            {/* View All button */}
            <div className="mt-15 mx-auto w-fit">
            <Link to='/allproducts' className='bg-linear-to-b from-orange-400 to-orange-600 text-white border-none rounded-lg md:text-lg text-md px-8 py-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
             View All
            </Link>
            </div>
        </section>
    )
}

export default Products
