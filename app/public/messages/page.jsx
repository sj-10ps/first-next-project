import React from 'react'

import MessageCard from '@/components/MessageCard'
import { cookies } from 'next/headers'
const fetchData=async()=>{
   const cookiestore=await cookies()
   try {
      const res=await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/message`,{cache:'no-store',headers:{Cookie:cookiestore.toString()}})
      if(!res.ok){
         throw new Error('failed to fetch')
      }
      return res.json() 
   } catch (error) {
      console.log(error.message)
      return []
   }
}
const page = async() => {
 const messages=await fetchData()
  return (
    <div className=' bg-cyan-100 flex justify-center '>
       <div className='bg-white md:w-4xl w-full flex flex-col p-4 my-20 mx-2'>
          <h2 className='text-3xl font-bold capitalize'>your messages</h2>
          <div className='flex flex-col gap-2'>
          {messages.map((m)=>(
         
             <MessageCard key={m._id} data={m}/>

          ))}
             </div>
       </div>
    </div>
  )
}

export default page
