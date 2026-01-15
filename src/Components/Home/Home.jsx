import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products'
import Discount from '../Discount'
import Process from '../Process'
import Testimonials from '../Testimonials'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Values/>
        <Products/>
        <Discount/>
        <Process/>
        <Testimonials/>
    </div>
  )
}

export default Home