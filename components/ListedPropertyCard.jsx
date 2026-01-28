'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ZoomImage from './ZoomImage'

const ListedPropertyCard = ({data}) => {
    const [zoom,setZoom]=useState(false)
    const photoref=useRef(null)
    useEffect(() => {
        const minimise=(e)=>{
          if(photoref){
          setZoom(false)
          } 
        }
        document.addEventListener('mousedown',minimise)
        
        return () => {
            document,removeEventListener('mousedown',minimise) 
        }; 
    }, [zoom]);
    
  return (
    <div className='shadow-lg rounded-lg flex flex-col gap-3 p-5'>
        {zoom&&(
            <ZoomImage img={data.images[0]} ref={photoref}/>
        )}
        <div className='flex gap-3 lg:justify-around '>
              <div className='h-48 w-52 relative'>
        <Image src={`/properties/${data.images[0]}`} fill alt='' className='hover:scale-105 duration-300' onClick={()=>setZoom(prev=>!prev)}/>
       </div>
           <div>
               <h2 className='text-xl font-bold capitalize'>{data.name}</h2>
       <p className='text-lg text-gray-500 capitalize'>Address: {data.location.city} {data.location.state}</p>
         <p className='max-w-xs text-slate-800 tracking-tighter font-serif'>{data.description}</p>
           </div>
        </div>
          
       <div className='flex justify-between'>
             <button className='bg-blue-600 hover:opacity-80 py-2 px-4 rounded-lg text-white font-semibold'>Edit</button>
             <button className='bg-red-600 hover:opacity-80 py-2 px-4 rounded-lg text-white font-semibold'>Delete</button>
       </div>
    </div>
  )
}

export default ListedPropertyCard
