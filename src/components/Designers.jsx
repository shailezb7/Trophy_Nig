import React from 'react'
import pro1 from '../assets/pro1.jpeg'
import pro2 from '../assets/pro2.jpeg'
import pro3 from '../assets/pro3.jpeg'
import pro4 from '../assets/pro4.jpeg'
import ImageCard from './ImageCard'

const Designers = () => {
    let designerData=[
        {
            image:pro1,
            name:"John Wick",
            role:"Designer",
        },
        {
            image:pro2,
            name:"Sarah",
            role:"Professional Designer",
        },
        {
            image:pro3,
            name:"Adam Sandler",
            role:"Interior Designer",
        },
        {
            image:pro4,
            name:"Amy Santiago",
            role:"Designer",
        }
    ]
  return (
    <div className='text-center my-10 space-y-4 p-4'>
        <h1 className='text-[#10C66F] text-3xl font-bold'>Meet Our Designers</h1>

        <h1 >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae voluptas ut, temporibus nihil 
       vel fuga deleniti expedita tempora ea, magnam recusandae asperiores? Fugiat voluptates veniam impedit quas 
       quidem laudantium culpa neque totam. Quos magni voluptate culpa, eum enim molestias?      
       </h1>

        <div className='flex flex-wrap space-y-6 space-x-4 justify-evenly'>
        {
            designerData?.map((elem,index)=>{
                return <ImageCard elem={elem} key={index}/>
            })
        }
        </div>
    </div>
  )
}

export default Designers