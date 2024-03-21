import React from 'react'

const PropertyCard = ({elem}) => {
  return (
    <div className='flex p-2 mt-10 transform hover:scale-110 transition-transform duration-300 rounded-md'>
        <img src={elem.image} alt={elem.name} />
        <div className='flex flex-col justify-between text-sm bg-[#EFEFEF]'>
           <div className='p-2 space-y-1'>
           <h1 className='font-bold'> {elem.name} </h1>
           <h1> {elem.builders} </h1>
           <h1 className='text-[#10C66F]'> {elem.place} </h1>
           <h1> {elem.type} </h1>    
           </div>

           <div className='p-2'>    
           <h1 className='text-[#A6A6A7] text-xs font-bold'> {elem.management} </h1>
           </div>
        </div>
    </div>
  )
}

export default PropertyCard