import React, { useState } from 'react'
import { FaBookDead, FaBookmark, FaBookOpen, FaSave, FaShare } from 'react-icons/fa'

const Propertycontact = () => {
    const [isBookmarked,setIsBookmarked]=useState(false)
  return (
    <div className='flex flex-col gap-6'>
        {isBookmarked?(

            <button className='bg-red-700 text-white font-bold text-md p-2 rounded-lg hover:opacity-80 capitalize flex justify-center items-center gap-2' onClick={()=>setIsBookmarked(prev=>!prev)}><FaBookmark/>bookmarked</button>
        ):(
            <button className='bg-blue-700 text-white font-bold text-md p-2 rounded-lg hover:opacity-80 capitalize flex justify-center items-center gap-2' onClick={()=>setIsBookmarked(prev=>!prev)}><FaBookmark/>bookmark property</button>
        )
        }
        <button className='bg-amber-500 text-white font-bold text-md p-2 rounded-lg hover:opacity-80 capitalize flex justify-center items-center gap-2' onClick={()=>setIsBookmarked(prev=>!prev)}><FaShare/>Share </button>

     {/* contactcard */}
     <div className='bg-white px-3 py-10 flex flex-col gap-5 shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold capitalize'>contact property manager</h2>
        <div className='grid grid-cols-[120px_1fr] gap-4'>
            <label htmlFor="" className='property-form-label'>Name</label>
            <input type="text" className='property-form-input' placeholder='enter your name'/>
            <label htmlFor="" className='property-form-label'>email</label>
            <input type="text" className='property-form-input' placeholder='enter your email'/>
            <label htmlFor="" className='property-form-label'>phone</label>
            <input type="text" className='property-form-input' placeholder='enter your phone'/>
        </div>
          <div className='flex flex-col '>
            <label htmlFor="" className='property-form-label'>message</label>
            <textarea type="text" className='property-form-input rounded-none h-36' placeholder='enter your message'/>
         </div>
     </div>
    </div>
  )
}

export default Propertycontact
