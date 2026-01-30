import React from 'react'
import { FaBath, FaBed, FaRulerCombined } from 'react-icons/fa'

const PropertyMoreDetails = ({data}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg px-4 py-8 flex flex-col gap-4'>
       <h2 className='text-xl font-bold capitalize'>description and details</h2>
       <div className='flex justify-center gap-14'>
           <div className='flex gap-1 items-center text-lg text-blue-700 capitalize'>
              <FaBed/> {data.beds} <span>beds</span>
           </div>
           <div className='flex gap-1 items-center text-lg text-blue-700 capitalize'>
              <FaBath/> {data.baths} <span>baths</span>
           </div>
           <div className='flex gap-1 items-center text-lg text-blue-700 capitalize'>
              <FaRulerCombined/> {data.square_feet} <span>sqft</span>
           </div>
       </div>
       <p className='text-slate-700'>This is a beautiful apartment located near the commons</p>
        <p className='text-slate-700'>We have a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.</p>

    </div>
  )
}

export default PropertyMoreDetails
