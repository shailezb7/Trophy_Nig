import React from 'react'

const WallpaperText = () => {
  return (
    <div className='text-white font-semibold absolute mt-[58px] md:mt-[150px] lg:mt-[180px]  md:p-8 
    text-xs md:text-lg lg:text-2xl text-justify space-y-1 md:space-y-4  p-4'>
        <p >We are offering the</p>

        <h1 className='text-lg md:text-2xl lg:text-5xl' style={{fontFamily:'sans-serif'}}>
            Best Real Upstate Deals
        </h1>

        <p className='max-sm:hidden'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt dolores voluptatem distinctio 
          magnam nihil architecto fugit voluptate atque quam? Repellendus vitae reiciendis nesciunt iure,
          soluta blanditiis cumque tenetur dicta ducimus?
        </p>

        <p className='md:hidden'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo accusamus laboriosam. Excepturi, veritatis pariatur.
        </p>

        <button className='bg-[#10C66F] p-2 rounded-md md:p-4'>More Details</button>
    </div>
  )
}

export default WallpaperText