import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import seafoodBG from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & Seafood" bgImage={seafoodBG} categories={['SeaFood','Meat']}/>
    </div>
  )
}

export default SeaFood