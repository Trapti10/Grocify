import React from 'react'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './Components/Pages/Fruits'
import Dairy from './Components/Pages/Dairy'
import SeaFood from './Components/Pages/SeaFood'
import AllProducts from './Components/Pages/AllProducts'
import Layout from './Components/Layout'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
         {
      path:'/',
      element:<Home/>
    },
         {
      path:'/fruits',
      element:<Fruits/>
    },
    {
      path:'/dairy',
      element:<Dairy/>
    },
    {
      path:'/seafood',
      element:<SeaFood/>
    },
    {
      path:'/allproducts',
      element:<AllProducts/>
    }
      ]
    },
  ])

  return <RouterProvider router={router}/>
}

export default App