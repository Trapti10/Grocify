import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../../data/productList'
import Cards from '../Cards'

const CategoryPage = () => {

const renderProduct =  ProductList.map(product=>{
    return(
        <Cards image={product.image} name={product.name} price={product.price}/>
    )
})

  return (
    <div >
        <Banner/>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-9 py-20 max-w-350 mx-auto px-10">
            {renderProduct}
        </div>
    </div>
  )
}

export default CategoryPage