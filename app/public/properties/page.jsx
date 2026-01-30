
import Link from 'next/link'
import React from 'react'

import PropertySearchBar from '@/components/PropertySearchBar'
import PropertiesSection from '@/components/PropertiesSection'



const Properties = () => {
   


  return (
    <div>
      <div className='bg-blue-700 flex justify-center p-6'>
              <PropertySearchBar/>
      </div>
      <PropertiesSection/>
  
       
    </div>
  )
}

export default Properties
