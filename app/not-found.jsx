'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
    const router=useRouter()
  return (
    <section>
        <div className='h-screen bg-black w-screen z-50 fixed inset-0 flex flex-col justify-center items-center gap-5'>
            <FaExclamationTriangle color='yellow' size={100}/>
           <h2 className='text-6xl uppercase text-white font-bold '>404 - not found</h2>
           <button onClick={()=>router.back()} className='text-blue-500 hover:text-yellow-400'>Go back to previous page</button>
        </div>
    </section>
  )
}

export default NotFound