import React from 'react'
import messages from '@/assets/data/messages.json'
import MessageCard from '@/components/MessageCard'
const page = () => {
  return (
    <div className=' bg-cyan-100 flex justify-center '>
       <div className='bg-white md:w-4xl w-full flex flex-col p-4 my-20 mx-2'>
          <h2 className='text-3xl font-bold capitalize'>your messages</h2>
          <div className='flex flex-col gap-2'>
          {messages.map((m,index)=>(
             <MessageCard key={index} data={m}/>
          ))}
             </div>
       </div>
    </div>
  )
}

export default page
