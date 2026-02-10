"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const PropertySearchBar = () => {
  const [type,setType]=useState('all')
  const [location,setLocation]=useState('')
  const router=useRouter()
  const handleSearch=(e)=>{
    e.preventDefault()

    if(type==="all" && location===''){
            router.push('/public/properties')
    }else{
           const query=`?location=${location}&type=${type}`
           router.push(`/public/properties/search_result${query}`)
    }
  }
  return (
    <form onSubmit={handleSearch} className='flex flex-col gap-3 md:flex-row w-full md:justify-center'>
                <input type="text" placeholder='Enter Location' className='bg-white placeholder:text-gray-600 py-3 px-6 pr-12 rounded-lg' value={location} onChange={(e)=>setLocation(e.target.value)}/>
                <select name="" id="" className='bg-white py-3 px-4 rounded-lg' value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value={'all'}>
                        All
                    </option> 
                     <option value={'apartment'}>
                        apartment
                    </option>
                      <option value={'studio'}>
                        Studio
                    </option> 
                     <option value={'condo'}>
                        Condo
                    </option> 
                     <option value={'house'}>
                        House
                    </option> 
                     <option value={'cabin'}>
                        Cabin
                    </option> 
                     <option value={'loft'}>
                        Loft
                    </option> 
                     <option value={'room'}>
                        Room
                    </option>
                      <option value={'other'}>
                        Other
                    </option>
                     
                </select>
                <button type='submit' className='bg-blue-500 py-2 px-6  rounded-lg text-white hover:opacity-75' >Search</button>

            </form>
  )
}

export default PropertySearchBar
