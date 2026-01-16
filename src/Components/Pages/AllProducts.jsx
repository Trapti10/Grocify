import React from 'react'
import Category from '../Category/Category'
import allBG from '../../assets/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const AllProducts = () => {
  return (
    <CategoryPage title="All Products" bgImage={allBG}/>
  )
}

export default AllProducts