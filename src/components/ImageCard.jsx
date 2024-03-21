import React, { useState } from 'react'
import { TbBrandFacebook } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";


const ImageCard = ({elem}) => {

  const [hov,setHov]=useState(false);
  
  return (
    <div className='mt-10 hover:bg-white hover:shadow-xl md:p-4 p-2 transform hover:scale-110 
    transition-transform duration-300 flex flex-col items-center rounded-lg'
     onMouseEnter={(e)=>{setHov(true)}}
     onMouseLeave={(e)=>{setHov(false)}}
    >
        <img src={elem.image} alt={elem.name}  className='rounded-full'/>
        <h1 className='text-lg font-bold'>{elem.name}</h1>
        <h1>{elem.role}</h1>
        {
            hov && 
            <div className='flex space-x-2 mx-auto mt-2'>
            <TbBrandFacebook style={{color:'#10C66F'}}/>
            <IoLogoInstagram/>
            <LuLinkedin/>
            <CiTwitter/>
        </div>
        }
    </div>
  )
}

export default ImageCard