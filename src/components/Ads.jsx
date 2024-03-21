import React from 'react'
import { LuCheck } from "react-icons/lu";
import mobile from '../assets/mobile.jpeg'
import googlePlay from '../assets/googleStore.png'
import appleStore from '../assets/appleStore.png'

const Ads = () => {
  return (
    <div className='flex justify-center items-center my-20 m-auto max-w-4xl bg-[#F2F1F1] text-justify 
    p-2 md:p-4 rounded-lg'>
        {/* Left Div  */}
        <div>
        {/* Top Div  */}
        <div className='my-2 p-2'>

         <div className='max-sm:p-4'>
          <h1 className='text-2xl font-bold'>Download Trophy Nig. App</h1>
          <h1 className='text-sm'>And Never miss out any update</h1>
         </div>

         <div className='flex space-x-2  items-center my-2'>
            <LuCheck style={{fontWeight:'bold', color:'#10C66F'}}/>
            <h1>Get to know about newly posted Properties as soon as they are posted</h1>
         </div>

         <div className='flex space-x-2  items-center my-2'>
            <LuCheck style={{fontWeight:'bold', color:'#10C66F'}}/>
            <h1>Manage your Properties with ease and instant alerts about Properties</h1>
         </div>
       
         <div className='flex space-x-2 items-center my-2 max-sm:p-4'>
            <img src={googlePlay} alt="googlePlay" className='h-[30px] md:h-[40px] w-auto'/>
            <img src={appleStore} alt="appleStore" className='h-[30px] md:h-[40px] w-auto' />
         </div>

        </div>
        </div>

        {/* Right Div  */}
        <div className='bg-[#F2F1F1]'>
             <img src={mobile} alt="mobile" />
        </div>
    </div>
  )
}

export default Ads