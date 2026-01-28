'use client'
import Image from 'next/image'
import React, { useEffect, useEffectEvent, useRef, useState } from 'react'
import ZoomImage from './ZoomImage'

const ProfileCard = ({ data }) => {
    const [zoom, setZoom] = useState(false)
    const photoref = useRef(null)
    useEffect(() => {
               const minimise=(e)=>{
                 if(photoref){
                 setZoom(false)
                 } 
               }
               document.addEventListener('mousedown',minimise)
               
               return () => {
                   document,removeEventListener('mousedown',minimise) 
               }; 
           }, [zoom]);

    return (
        <div className='flex flex-col gap-4 bg-white shadow-lg p-4 rounded-lg h-fit'>
            {zoom&&(
                <ZoomImage img={data.image} ref={photoref}/>
            )}

            <div className='w-48 h-48 relative bg-gray-600 rounded-full overflow-hidden hover:scale-105 duration-300'>
                <Image src={`/properties/${data.image}`} fill alt='' onClick={() => setZoom(prev => !prev)} tabIndex={1}   />
            </div>
            {/* {zoom && (
                <div className='fixed  h-screen backdrop-blur-lg z-50 w-screen  inset-0 top-15 flex justify-center items-center '>
                    <div className='w-48 h-48  bg-gray-600 rounded-full overflow-hidden scale-200' tabIndex={2} ref={photoref}>
                        <Image src={`/properties/${data.image}`} fill alt='' onClick={() => setZoom(prev => !prev)} tabIndex={1} />

                    </div>
                </div>
            )} */}
            <div>
                <p className='font-bold text-xl'>Name:</p>
                <p className='text-xl capitalize'>{data.name}</p>
            </div>

            <div>
                <p className='font-bold text-xl'>Email:</p>
                <p className='text-xl'>{data.email}</p>
            </div>

        </div>
    )
}

export default ProfileCard