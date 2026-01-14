import React from 'react'

const Heading = (props) => {
    
  return (
    <div className="w-fit mx-auto">
    <h2 className='md:text-5xl text-4xl text-zinc-800 font-bold'><span className="text-orange-500">{props.highlight}</span> {props.Heading}</h2>
    <div className="w-25 bg-amber-400 h-1 ml-auto md:mt-6 mt-3"></div>
  </div>
  )
}

export default Heading
