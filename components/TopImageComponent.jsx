"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HeroCarousel from './ImageSlider'

const TopImageComponent = ({images}) => {
  const [isSliderOpen,setIsSliderOpen]=useState(false)
  if(isSliderOpen){
    return(
           <HeroCarousel images={images} onClose={()=>setIsSliderOpen(false)}/>
        )}
  return (
    <div className='relative h-64 w-full group' onClick={()=>setIsSliderOpen((prev)=>!prev)}>
        
      <Image src={`/properties/${images[0]}`} fill alt='' className='object-fit'/>
  <div className='absolute top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2 
                  bg-slate-500 text-white px-6 duration-500 py-4 rounded-xl group-hover:opacity-100 opacity-40'>
            click for more images
         </div>
    </div>
  )
}

export default TopImageComponent
