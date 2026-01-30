import React from 'react'

import FeaturedCard from './FeaturedCard'
import { fetchFeaturedData } from '@/utils/utils'



const HomeFeaturedProperties = async () => {
  const properties=await fetchFeaturedData()
  
  return (
    <div className='bg-cyan-100 py-4 p-2 flex items-center flex-col gap-4'>
      <h2 className='text-3xl font-bold text-blue-700 capitalize  '>featured properties</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[85%] mx-auto w-full'>
         {properties.map((f,index)=>(
        <FeaturedCard key={index} data={f}/>
      ))}
      </div>
    </div>
  )
}

export default HomeFeaturedProperties