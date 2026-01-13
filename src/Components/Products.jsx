import React, { useState } from 'react'
import Heading from './Heading/Heading'
import productsList from '../data/productList'
import Cards from './Cards'
import Button from './Button/Button'

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
        <section className='max-w-350 mx-auto px-10 py-20'>
            <Heading highlight='Our' Heading='Products' />

            {/* Tabs */}
            <div className='flex gap-3 justify-center items-center'>
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
            <div className="grid grid-cols-4 gap-9 mt-20">
                {renderCards}
            </div>

            {/* View All button */}
            <div className="mt-15 mx-auto w-fit">
            <Button text="View All" />
            </div>
        </section>
    )
}

export default Products
