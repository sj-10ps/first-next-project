import React from 'react'
import properties from '@/assets/data/properties.json'
import FeaturedCard from './FeaturedCard'


const HomeFeaturedProperties = () => {
  const featuredproperties= properties.filter((p)=>p.is_featured===true)
  return (
    <div className='bg-cyan-100 py-4 p-2 flex items-center flex-col gap-4'>
      <h2 className='text-3xl font-bold text-blue-700 capitalize  '>featured properties</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[85%] mx-auto w-full'>
         {featuredproperties.map((f,index)=>(
        <FeaturedCard key={index} data={f}/>
      ))}
      </div>
    </div>
  )
}

export default HomeFeaturedProperties