import React, { useState } from 'react'
import tree from '../assets/tree.png';
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
    // console.log(hamburger)
  }
  return (
    <div className='absolute inset-0 md:p-4 max-sm:p-2  flex justify-between max-h-[100px] w-full'>
      {/* Left Section   */}
      <div className='flex flex-col items-center'>
        <img src={tree} alt="tree" className='max-md:w-6 md:w-auto lg:w-auto' />
        <h1 className='text-[#2BC273] text-sm md:text-lg lg:text-3xl font-bold'>Trophy Nig.</h1>
        <p className='text-xs lg:text-sm text-white'>PROPERTY LIMITED</p>
      </div>

      {/* Right Section  for medium and large screens*/}
      <div className='text-[#2BC273] flex justify-evenly space-x-8 p-10 text-lg  font-bold max-lg:hidden'>
        <span className='cursor-pointer hover:scale-110 hovertransform:underline transition- duration-300'>Home</span>
        <span className='cursor-pointer hover:scale-110 hovertransform:underline transition- duration-300'>Properties</span>
        <span className='cursor-pointer hover:scale-110 hovertransform:underline transition- duration-300'>Designs</span>
        <span className='cursor-pointer hover:scale-110 hovertransform:underline transition- duration-300'>Search</span>
        <span className='cursor-pointer hover:scale-110 hovertransform:underline transition- duration-300'>About us</span>
        <span className='cursor-pointer hover:scale-110 hovertransform:underline transition- duration-300'>Contact us</span>
        <BsPersonCircle style={{ color: "white", height: '40px', width: '40px' }} />
        <select name="listing" id="listing"
         className='bg-[#10C66F] text-white text-md h-10 rounded-sm '>
          <option value="">Create Listing</option>
          <option value="">List 1</option>
          <option value="">List 2</option>
          <option value="">List 3</option>
          <option value="">List 4</option>
        </select>
      </div>

      {/* Right Section for small screens  */}

      <div className='lg:hidden relative'>
        <GiHamburgerMenu className='w-10 md:w-16  h-full max-sm:-mt-6 text-[#10C66F]'
          onClick={handleHamburger}
        />
        {/* Hamburger Options  */}
        {
          hamburger &&
          <div
            className='text-black absolute right-0 top-10 md:top-16 p-4 rounded-md bg-[#2BC273] flex flex-col justify-evenly space-y-2 text-sm md:text-lg 
           font-bold z-50 lg:hidden'>
            <span className='cursor-pointer'>Home</span>
            <span className='cursor-pointer'>Properties</span>
            <span className='cursor-pointer'>Designs</span>
            <span className='cursor-pointer'>Search</span>
            <span className='cursor-pointer'>About us</span>
            <span className='cursor-pointer'>Contact us</span>
            <BsPersonCircle style={{ color: "black", height: '40px', width: '40px',marginLeft:'4px' }} />
            <select name="listing" id="listing"
              className='bg-[#10C66F] text-white text-sm p-2 rounded-sm m-auto'>
              <option value="">Create Listing</option>
              <option value="">List 1</option>
              <option value="">List 2</option>
              <option value="">List 3</option>
              <option value="">List 4</option>
            </select>
          </div>
        }
      </div>

    </div>
  )
}

export default Navbar
