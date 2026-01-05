import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='bg-white'>
      <nav className='max-w-350 mx-auto px-10 h-[14vh] flex justify-between items-center'>
        {/* Logo */}
        <a href="#" className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>

        {/* Desktop menu */}
        <ul className='flex items-center gap-5 '>
          <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
        </ul>

        {/* Nav action */}
        <div className="flex items-center gap-5">
          <div className="flex p-1.5 border-2 border-orange-500 rounded-full">
          <input className='flex-1 outline-none px-3 h-[4vh]' type="text" id='text' placeholder='Search...' autoComplete='off' />
          <button className='bg-linear-to-b  from-orange-400 to-orange-600 rounded-full w-10 h-10 text-xl flex justify-center items-center text-white'><IoSearch/></button>
          </div>
          <a href="#" className='text-zinc-800 text-2xl'><GoHeartFill /></a>
          <a href="#" className='text-zinc-800 text-2xl'><HiMiniShoppingBag /></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar