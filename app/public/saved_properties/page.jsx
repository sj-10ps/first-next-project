import React from 'react'
import Properties from '@/assets/data/properties.json'
import ListedCard from '@/components/ListedCard'
const page = () => {
  return (
    <div className='mt-6 px-6'>
      <h2 className='text-3xl capitalize font-bold'>your saved properties</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {Properties.map(p=>(
            <ListedCard key={p._id} data={p}/>

         ))}
     </div>
    </div>
  )
}

export default page
