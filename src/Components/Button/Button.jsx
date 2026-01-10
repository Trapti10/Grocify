import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white border-none rounded-lg md:text-lg text-md px-8 py-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
    {props.text}
    </button>
  )
}

export default Button