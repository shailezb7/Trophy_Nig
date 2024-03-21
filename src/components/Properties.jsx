import React from 'react'
import interior1 from '../assets/interior1.jpeg'
import interior2 from '../assets/interior2.jpeg'
import interior3 from '../assets/interior3.jpeg'
import PropertyCard from './PropertyCard'


const Properties = () => {

    let propertiesData=[
        {
            image:interior1,
            name:"Mapkson Gardania",
            builders:"Mapkson Builders",
            place:"Greater Kailash, Delhi",
            type:"3 bed  2 bath",
            management:"Managed by JR Developers"
        },
        {
            image:interior2,
            name:"Mapkson Gardania",
            builders:"Mapkson Builders",
            place:"Greater Kailash, Delhi",
            type:"3 bed  2 bath",
            management:"Managed by JR Developers"
        },
        {
            image:interior3,
            name:"Mapkson Gardania",
            builders:"Mapkson Builders",
            place:"Greater Kailash, Delhi",
            type:"3 bed  2 bath",
            management:"Managed by JR Developers"
        },

    ]
    return (
        <div className='text-center my-20 space-y-4 p-4'>
         <h1 className='text-[#10C66F] text-3xl font-bold'>Top Rated Properties</h1>

        <h1 >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae voluptas ut, temporibus nihil 
       vel fuga deleniti expedita tempora ea, magnam recusandae asperiores? Fugiat voluptates veniam impedit quas 
       quidem laudantium culpa neque totam. Quos magni voluptate culpa, eum enim molestias?      
       </h1>

       <div className='flex justify-evenly flex-wrap'>
          {
            propertiesData?.map((elem,index)=>{
                return <PropertyCard elem={elem} key={index}/>
            })
          }
       </div>

        </div>
    )
}

export default Properties