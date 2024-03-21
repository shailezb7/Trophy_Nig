import React from 'react'

const FeaturedCard = ({ item }) => {
  return (
    <div
      className='inline-block shadow-xl rounded-lg w-[220px] cursor-pointer hover:scale-105 ease-in-out duration-300 '
    >
      <img
        className='h-[200px] w-full  '
        src={item.image}
        alt='/'
      />
      
      <div className='p-2'>
      <h1>{item.name}</h1>
      <h1 className='font-bold text-[#10C66F]'>{item.size}</h1>
      <h1>{item.model}</h1>
      <h1 className='text-xs'>{item.management}</h1>
      </div>
    </div>
  )
}

export default FeaturedCard