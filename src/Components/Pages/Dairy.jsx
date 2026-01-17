import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import dairyBG from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy & Eggs" bgImage={dairyBG} categories='Dairy'/>
    </div>
  )
}

export default Dairy
