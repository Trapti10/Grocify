import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import FruitsBG from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
       <CategoryPage title="Fruits & Veggies" bgImage={FruitsBG} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits