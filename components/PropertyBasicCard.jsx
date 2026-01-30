import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

const PropertyBasicCard = ({data}) => {
  return (
    <div className='bg-white p-4 rounded-lg flex flex-col gap-5 shadow-lg'>
      <p className='text-slate-700 text-md'>{data.type}</p>
      <p className='font-bold text-xl '>{data.name}</p>
      <p className='text-red-500 flex gap-1 items-center'><FaLocationArrow/>{data.location.street} {data.location.city} ,{data.location.state} {data.location.zipcode}</p>
      <h2 className='bg-gray-800 p-2 capitalize text-md font-bold text-white'>rates & options</h2>
       <div className='flex gap-2 items-center md:justify-evenly flex-col md:flex-row px-10'>
          <p className='flex gap-2  capitalize text-gray-700 text-lg font-semibold items-center '>nightly 
             {data.rates.nightly?(
               <span className='text-blue-700'>${data.rates.nightly}</span>
              ):(
              <FiX color='red' size={30}/>
              )}
          
            </p>
            <div className='border-b-2 border-slate-200 w-full'></div>
            <p className='flex gap-2 capitalize text-gray-700 items-center text-lg font-semibold'>weekly 
             {data.rates.weekly?(
               <span className='text-blue-700'>${data.rates.weekly}</span>
              ):(
              <FiX color='red' size={30}/>
              )}
          
            </p>
             <div className='border-b-2 border-slate-200 w-full'></div>
            <p className='flex gap-2 capitalize text-gray-700 items-center text-lg font-semibold'>monthly 
             {data.rates.monthly?(
               <span className='text-blue-700'>${data.rates.monthly}</span>
              ):(
              <FiX color='red' size={30}/>
              )}
          
            </p>
             <div className='border-b-2 border-slate-200 w-full'></div>
       </div> 
       
    </div>
  )
}

export default PropertyBasicCard
