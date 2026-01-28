import Image from 'next/image'
import React from 'react'

const ZoomImage = ({img}) => {
  return (
    <div className="fixed inset-0 h-screen w-screen z-50 backdrop-blur-lg">
        <div className='flex justify-center items-center h-full'>
            <div className='lg:h-86 lg:w-86 h-48 w-48 relative animate-imgonload overflow-clip'>
                   <Image src={`/properties/${img}`} fill alt='' className=''/>
            </div>
      
        </div>
        
      </div>
  )
}

export default ZoomImage
