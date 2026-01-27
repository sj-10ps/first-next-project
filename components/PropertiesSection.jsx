import React from 'react'
import properties from '@/assets/data/properties.json'
import PropertyBox from './PropertyBox'


const PropertiesSection = () => {
  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 max-w-[90%] mx-auto'>
        {properties.length===0?(
            <p>No data found...</p>
        ):(
             properties.map((p)=>(
          <PropertyBox key={p._id} data={p}/>
        ))

        )
        }

       
    </div>
  )
}

export default PropertiesSection