import Image from 'next/image'
import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'

const PhotoSwipe = ({data}) => {
    const images=data.images
  return (
    <Gallery>
    <section className='bg-blue-50 rounded-lg p-4 w-[80%] mx-auto'>
       {images.length===0?(
       
            <Item thumbnail={images[0]} original={images[0]} width={1000} height={600} >
                {({ref,open})=>(
                     <div className='h-80 w-full relative mx-auto' ref={ref} onClick={open}>
                      <Image   src={images[0]} alt='' fill />
                              
          </div>
                )}
            </Item>

       ):(
        <div className='grid md:grid-cols-2 gap-4'>
           {images.map((i,index)=>(
            <Item key={index} thumbnail={i} original={i} width={1000} height={600}>
                {({ref,open})=>(
                <div ref={ref} onClick={open} className={`h-80 w-full relative ${images.length===3 && index===2?'col-span-2':'col-span-1'}`}>
                 <Image src={i} alt='' fill />
                </div>
                )}
            
            </Item>
           
           ))}
        </div>
       )}
    </section>
    </Gallery>
  )
}

export default PhotoSwipe