
import React from 'react'
import Properties from '@/assets/data/properties.json'
import ListedPropertyCard from './ListedPropertyCard'


const ProfileListings = () => {

  return (
    <div className='h-screen overflow-y-scroll no-scrollbar px-5 bg-white shadow-lg p-4 rounded-lg'>
        <h2 className='text-2xl font-bold capitalize'>your listings</h2>
        <div className='flex flex-col gap-4 mt-4'>
             {Properties.map((p)=>(
                <ListedPropertyCard key={p._id} data={p} />
             ))}
        </div> 
    </div>
  )
}

export default ProfileListings