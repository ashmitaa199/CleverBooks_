import React, { useState } from 'react'
import { testimonialData } from '@/constant'
import { CircleChevronLeft , CircleChevronRight } from 'lucide-react';
import Ind1 from './Ind1';
import Ind0 from './Ind0';
const Testimonial = () => {
    const [index , setIndex] = useState(0);
    const [data , setData] = useState(testimonialData[index]);
    function handleLeft(){
          setIndex(Math.abs((index-1))%testimonialData.length);
          setData(testimonialData[index])
    }
    function handleRight(){
        setIndex((index+1)%testimonialData.length);
        setData(testimonialData[index])

    }

  return (
    <div className='flex-col-reverse  flex lg:flex-row  justify-center lg:items-start px-24 py-10  gap-6 '>
        <div className='flex flex-col justify-center items-start space-y-12 w-full'>
            <p className='w-full text-base font-normal font-customFont'>{data.description}</p>
            <div className=' flex justify-between items-center w-full'>
                <div className='flex justify-center items-center space-x-4 '>
                <img src={data.avatar} className='rounded-full w-16 h-16 ' alt="" />
                <div className='flex flex-col justify-center items-start'>
                    <p className='font-customFont'>{data.name}</p>
                    <p className='font-customFont'>{data.position}</p>
                </div>
                </div>
                <img src={data.logo} className='w-24 h-24' alt="" />
            </div>
            <div className=' flex justify-center items-center  space-x-6'>
                     {/* <p onClick={()=>handleLeft()}>left</p>
                     <p onClick={()=>handleRight()}>right</p> */}
                     {/* <CircleChevronLeft onClick={()=>handleLeft()} className='w-6 h-6  cursor-pointer'/>
                     <CircleChevronRight onClick={()=>handleRight()} className='w-6 h-6  cursor-pointer'/> */}
                     <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt=""  className='rotate-180 cursor-pointer' onClick={()=>handleLeft()}/>
                     <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt=""
                     className='cursor-pointer'  onClick={()=>handleRight()}/>
            </div>
            {index==1 ? <Ind1/>:<Ind0/>}
        </div>
        <div className='w-full'>
            <img src={data.image} className=' w-full  lg:min-w-[400px] h-[500px] rounded-2xl border-2 border-[#d382d0]' alt="" />
        </div>

    </div>
  )
}

export default Testimonial