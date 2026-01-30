import React from 'react'
import { FaCheck } from 'react-icons/fa'

const PropertyAmenities = ({data}) => {
  return (
    <div className='bg-white p-5 rounded-lg shadow-lg'>
      <h2 className='capitalize text-lg font-bold'>amenities</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 mt-5'>
        {data.amenities.map((a,index)=>(
            <div key={index} className='flex gap-1 items-center text-md'>
               <FaCheck color='green'/>  <span>{a}</span>
             </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyAmenities
