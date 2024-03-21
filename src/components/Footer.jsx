import React from 'react'
import { LiaFacebook } from "react-icons/lia";
import { RxInstagramLogo } from "react-icons/rx";
import { PiWhatsappLogoLight } from "react-icons/pi";
import tree from '../assets/tree.png'
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




const Footer = () => {
  return (
    <div className='min-h-[200px] bg-[#10C66F] flex justify-evenly  flex-wrap text-white p-2 md:p-4'>
      {/* First Div  */}
      <div className='text-xs mx-auto'>
       <div className='flex flex-col '>
         <img src={tree} alt="tree" className='max-md:w-6 md:w-[50px] lg:w-[50px]' />
         <h1 className='text-sm md:text-lg lg:text-xl font-bold'>Trophy Nig.</h1>
         <p className='text-xs lg:text-sm text-white'>PROPERTY LIMITED</p>
       </div>

       <div className='flex flex-col' >
         <h1>Follow us on:</h1>
         <div className='flex space-x-2'>
          <LiaFacebook/>
          <RxInstagramLogo/>
          <PiWhatsappLogoLight/>
         </div>
       </div>

        <div className='mx-auto'>
        <div className='flex space-x-2 items-center '>
          <MdEmail/>
          <h1>info@trophynig.com</h1>
        </div>
        <div className='flex space-x-2 items-center'>
          <FaMobileAlt/>
          <h1>8549652148</h1>
        </div>
        <div className='flex  space-x-2 items-center'>
          <FaLocationDot/>
          <h1 className='max-sm:hidden'>2971 Westheimer Rd Santa Ana Illinois 85486</h1>
          <div className='flex-col'>
           <h1 className='md:hidden'>2971 Westheimer Rd Santa Ana</h1>
           <h1 className='md:hidden'>Illinois 85486</h1>
          </div>
        </div>
        </div>
      </div>
      {/* Second Div  */}
      <div className='flex flex-col space-y-2 m-auto  text-justify text-xs'>
        <span className='font-bold text-lg'>Company</span>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Pricing</span>
        <span>Terms & Condition</span>
        <span>Report A Problem</span>
        <span>Private Policy</span>
      </div>
      {/* Third Div  */}
      <div className='flex flex-col space-y-2 items-center m-auto'>
        <h1>Stay Upto Date</h1>
        <input type="email" placeholder='Enter Your Email Address' 
         className='px-2 py-1 bg-white'
        />
        <button>Subscribe For Newsletter</button>
      </div>
    </div>
  )
}

export default Footer