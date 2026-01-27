import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBed,FaBath,FaRulerCombined ,FaMoneyBill,FaLocationArrow} from 'react-icons/fa'



const PropertyBox = ({data}) => {
    const getMoneyDisplay=()=>{
       
        const {rates}=data
        if(rates.monthly){
            return `${rates.monthly}/mo`
        }else if(rates.weekly){
            return `${rates.weekly}/wk`
        }else{
            return `${rates.nightly}/ni`    
        }
    }

  
  return (
    <div className='bg-white shadow-xl rounded-xl py-6 px-4 flex flex-col gap-2'>
        <div className='relative h-48'>
             <Image src={data.images&&data.images[0]?`/properties/${data.images[0]}`:`/notfound.webp`} fill  alt='No image' className='hover:scale-105'/>
            <p className='text-lg text-blue-700 absolute right-2 top-2 bg-white py-1 px-2 rounded-lg'>
                 ${getMoneyDisplay()}
                </p>
        </div>
         <p className='capitalize text-lg text-gray-700'>{data.type}</p>
        <h2 className='text-xl font-bold'>{data.name}</h2>
        <div className='flex justify-center gap-3 pt-6'>
          <p className='flex items-center gap-1 text-gray-600 capitalize '>
            <FaBed/>
            <span>{data.beds} beds</span>
          </p>
          <p className='flex items-center gap-1 text-gray-600 capitalize '>
            <FaBath/>
            <span>{data.baths} baths</span>
          </p>
          <p className='flex items-center gap-1 text-gray-600 capitalize '>
            <FaRulerCombined/>
            <span>{data.square_feet} sqft</span>
          </p>  
        </div>
        <div className='flex justify-center gap-3'>
            {data.rates.monthly&&(
                  <p  className='flex gap-2 text-gray-600 items-center'>
                   <FaMoneyBill/>
                   <span>Monthly</span>
                  </p>
            )}
            {data.rates.weekly&&(
                  <p  className='flex gap-2 text-gray-600 items-center'>
                   <FaMoneyBill/>
                   <span>Weekly</span>
                  </p>
            )}
            {data.rates.nightly&&(
                  <p  className='flex gap-2 text-gray-600 items-center'>
                   <FaMoneyBill/>
                   <span>Nightly</span>
                  </p>
            )}
        </div>
        <div className='border-b border-gray-600 w-full'></div>
        <div className='flex justify-between'>
            <p className='flex gap-1 text-red-700 items-center group '>
              <FaLocationArrow className='group-hover:scale-120 group-hover:text-blue-700 group-hover:-translate-y-1'/>
              <span className='group-hover:text-blue-700'>{data.location.city}</span>
              <span className='group-hover:text-blue-700'>{data.location.state}</span>
            </p>
 
             <Link href={`/public/properties/${data._id}`} className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:opacity-80'>Details</Link>
        </div>


    </div>
  )
}

export default React.memo(PropertyBox)