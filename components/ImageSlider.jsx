"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

const ImageSlider = ({images,onClose}) => {
  const [index,setIndex]=useState(0)
  const [fade,setFade]=useState(true)
  const handleClick=(type)=>{
         setFade(false)
         setTimeout(()=>{
          setIndex(prev=>type==="inc"
          ?(prev+1)%images.length
          :(prev-1+images.length)%images.length
         )
          setFade(true)
         },500)
  }
  
  return (
    <div className='relative md:w-80% w-[70%] md:h-96 h-80'>
      <FiX className='absolute right-0 top-0 z-20 size-10 text-white bg-gray-800 rounded-bl-lg  hover:text-red-700 hover:bg-white' onClick={onClose}/>
      <Image src={`${images[index]}`}  fill alt="" className={`object-fit duration-500 ${fade?"opacity-100":"opacity-0"}`}/> 
       <button className='bg-gray-800 text-white  absolute right-2 top-1/2 -translate-y-1/2 rounded-full hover:text-red-700 hover:bg-white'><FiChevronRight className='size-8' onClick={()=>handleClick("inc")}/></button> 
        <button className='bg-gray-800 text-white  absolute left-2 top-1/2 -translate-y-1/2 rounded-full hover:text-red-700 hover:bg-white'><FiChevronLeft className='size-8' onClick={()=>handleClick("dec")}/></button>     
    </div>
  )
}

export default ImageSlider