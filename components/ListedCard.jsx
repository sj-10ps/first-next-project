'use client'
import Image from 'next/image'
import React, { useRef, useState,useEffect } from 'react'
import { FaBath, FaBed, FaTrash ,FaRulerCombined,FaMoneyBill} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import ZoomImage from './ZoomImage'

const ListedCard = ({data}) => {
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
    

    const ratedisplay=()=>{
        const rates=data.rates
        if(rates.monthly){
            return `${rates.monthly}/mo`
        }else if(rates.weekly){
            return `${rates.weekly}/wk`
        }else{
            return `${rates.nightly}/ni`
        }
    }
  return (
    <div className='bg-white rounded-lg shadow-lg p-4'>
         {zoom&&(
        <ZoomImage img={data.images[0]} ref={photoref}/>
      )}
      <div className='flex justify-between'>
          <div className='relative h-48 w-48'>
             <Image src={`/properties/${data.images[0]}`} fill alt='' className='hover:scale-105 duration-300' onClick={()=>setZoom(prev=>!prev)}/>
             <FaTrash className='absolute top-1 left-1 bg-white h-8 w-8 p-2 text-red-500  rounded-xl hover:scale-110 hover:bg-red-500 hover:text-white'/>
          </div>
          <div className='bg-white p-2 text-blue-500 text-lg font-semibold shadow-lg h-fit rounded-sm'>
            ${ratedisplay()}
          </div>
      </div>
      <div className='flex flex-col gap-4'>
         <h3 className='text-lg text-slate-700 '>{data.type}</h3>
         <h2 className='text-xl font-bold'>{data.name}</h2>
         <div className='flex justify-center gap-3 '>
           <p className='flex gap-1 text-gray-700 capitalize text-md items-center'><FaBed/>{data.beds} beds</p>
           <p className='flex gap-1 text-gray-700 capitalize text-md  items-center'><FaBath/>{data.baths} baths</p>
           <p className='flex gap-1 text-gray-700 capitalize text-md  items-center'><FaRulerCombined/>{data.square_feet} sqft</p>
         </div>
         <div className='flex justify-center gap-3'>
            {data.rates.monthly&&(
                 <p className='flex gap-1 items-center text-gray-800 text-md capitalize'><FaMoneyBill/>Monthly</p>
            )}
               {data.rates.weekly&&(
                 <p className='flex gap-1 items-center text-gray-800 text-md capitalize'><FaMoneyBill/>weekly</p>
            )}
               {data.rates.nightly&&(
                 <p className='flex gap-1 items-center text-gray-800 text-md capitalize'><FaMoneyBill/>nightly</p>
            )}
         </div>
         <div className='border-b border-gray-300 opacity-55'></div>
            <div className='flex justify-between'>
                 <p className='flex gap-1 items-center text-red-600 text-lg'><MdLocationOn/> {data.location.city} {data.location.state}</p>
                 <button className='bg-blue-600 hover:opacity-80 py-2 px-3 rounded-lg text-white'>Details</button>
            </div>

     
      </div>
    </div>
  )
}

export default ListedCard
