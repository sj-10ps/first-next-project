'use client'
import Image from 'next/image'
import React, { useEffect, useEffectEvent, useRef, useState } from 'react'
import ZoomImage from './ZoomImage'
import { useSession } from 'next-auth/react'
const ProfileCard = () => {
     const {data:session}=useSession()
   
        
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
                <ZoomImage img={session.user.image} ref={photoref}/>
            )}

          {session&&( <>
            <div className='w-48 h-48 relative bg-gray-600 rounded-full overflow-hidden hover:scale-105 duration-300'>
                <Image src={`${session.user.image}`} fill alt='' onClick={() => setZoom(prev => !prev)} tabIndex={1}   />
            </div>
        
            <div>
                <p className='font-bold text-xl'>Name:</p>
                <p className='text-xl capitalize'>{session.user.name}</p>
            </div>

            <div>
                <p className='font-bold text-xl'>Email:</p>
                <p className='text-xl'>{session.user.email}</p>
            </div>
             </>
) }
        </div>
       
    )
}

export default ProfileCard