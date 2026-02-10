"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import {IoArrowBack} from 'react-icons/io5'


const BacktoProperty = () => {
 const router=useRouter() 
  return (
    <div className='bg-white p-5 text-blue-700 flex gap-1 items-center cursor-pointer' onClick={()=>router.push('/public/properties')}>
       <IoArrowBack/> <span>Back To Properties</span> 
    </div>
  
  )
}

export default BacktoProperty
