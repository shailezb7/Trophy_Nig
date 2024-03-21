import React, { useState, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import FeaturedCard from './FeaturedCard';
import int1 from '../assets/int1.jpeg';
import int2 from '../assets/int2.jpeg';
import int3 from '../assets/int3.jpeg';
import int4 from '../assets/int4.jpeg';
import int5 from '../assets/int5.jpeg';
import int6 from '../assets/int6.jpeg';
import int7 from '../assets/int7.jpeg';
import int8 from '../assets/int8.jpeg';
import int9 from '../assets/int9.jpeg';

const FeaturedProperty = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const data = [
    {
      image: int1,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int2,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int3,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int4,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int5,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int6,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int7,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int8,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
    {
      image: int9,
      name: 'Mini Flat in Lekki Phase',
      size: 'N 2,500,000/sq ft',
      model: '3 Bed  2 bath',
      management: 'Managed by JR Developers'
    },
  ]

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
   <div className='my-10 w-full text-center  space-y-4 p-4'>

    <h1 className='text-[#10C66F] text-3xl font-bold'>Featured Properties</h1>

        <h1 >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae voluptas ut, temporibus nihil 
       vel fuga deleniti expedita tempora ea, magnam recusandae asperiores? Fugiat voluptates veniam impedit quas 
       quidem laudantium culpa neque totam. Quos magni voluptate culpa, eum enim molestias?      
       </h1>
     
     <div className='relative flex items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
      <div
        id='slider'
        className='w-full h-full space-x-10 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {data.map((item, index) => (
          <FeaturedCard item={item} key={index} />
        ))}


      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
    </div>
   </div>
  );
};

export default FeaturedProperty;
