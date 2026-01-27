import React from 'react'
import Hero from '@/components/Hero'
import HomeFeaturedProperties from '@/components/HomeFeaturedProperties'
import HomeOtherProperties from '@/components/HomeOtherProperties'
import InfoBoxSection from '@/components/InfoBoxSection'

const HomePage = () => {
  return (
    <div>
     <Hero/>
        <InfoBoxSection/>
        <div className='mt-4'>
          <HomeFeaturedProperties/>
        </div>
        <div className='mt-4'>
            <HomeOtherProperties/>
        </div>
        </div>
  )
}

export default HomePage