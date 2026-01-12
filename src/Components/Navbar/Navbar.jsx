import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isscrolled, setIsscrolled] = useState(false)

  const toggleMenu =  ()=>{
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const handleScroll = ()=>{
      setIsscrolled(window.scrollY > 10);
    }
  window.addEventListener('scroll', handleScroll);
  return ()=> window.removeEventListener('scroll',handleScroll)
  }, [])
  

  return (
    <div className={`bg-white fixed right-0 left-0 z-20 ${isscrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.2)]' : ' '}`}>
      <nav className='max-w-350 mx-auto px-10 md:h-[14vh]  flex h-[12vh] justify-between items-center'>
        {/* Logo */}
        <a href="#" className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>

        {/* Desktop menu */}
        <ul className='md:flex items-center gap-5 hidden'>
          <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
        </ul>

        {/* Nav action */}
        <div className="flex items-center gap-5">
         {/* Input field */}
          <div className="md:flex p-1.5 border-2 border-orange-500 rounded-full hidden">
          <input className='flex-1 outline-none px-3 h-[4vh]' type="text" id='text' placeholder='Search...' autoComplete='off' />
          <button className='bg-linear-to-b  from-orange-400 to-orange-600 rounded-full w-10 h-10 text-xl flex justify-center items-center text-white'><IoSearch/></button>
          </div>
          {/* Icons */}
          <a href="#" className='text-zinc-800 text-2xl'><GoHeartFill /></a>
          <a href="#" className='text-zinc-800 text-2xl'><HiMiniShoppingBag /></a>
          <a href="#" className='text-zinc-800 text-3xl md:hidden ' onClick={toggleMenu}>
            {showMenu ?<TbMenu3/>: <GiHamburgerMenu/>}
          </a>
        </div>
        {/* Mobile Menu */}
         <ul className={`md:hidden items-center flex-col flex  gap-y-15 bg-orange-500/20 backdrop-blur-2xl rounded-xl absolute -left-full p-10 top-30 transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2': '-left-full'}`}>
          <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
           <div className="flex p-1.5 border-2 border-orange-500 rounded-full md:hidden">
          <input className='flex-1 outline-none px-3 h-[4vh]' type="text" id='text' placeholder='Search...' autoComplete='off' />
          <button className='bg-linear-to-b  from-orange-400 to-orange-600 rounded-full w-10 h-10 text-xl flex justify-center items-center text-white'><IoSearch/></button>
          </div>
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar