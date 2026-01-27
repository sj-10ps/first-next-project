import React from 'react'
import PropertySearchBar from './PropertySearchBar'

const Hero = () => {
  return (
    <div className='bg-blue-700'>
        <div className='flex flex-col gap-6 py-12 items-center px-4'>
            <h2 className='text-4xl md:text-6xl font-extrabold text-white capitalize'>find the perfect hotel wekjfhwh</h2>
            <p className='text-lg text-white'>Discover the perfect property that suits your needs.</p>
            <PropertySearchBar/>

        </div>
      
    </div>
  )
}

export default Hero
