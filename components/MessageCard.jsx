import Link from 'next/link'
import React from 'react'

const MessageCard = ({data}) => {
  return (
    <div className='bg-white rounded-lg p-4 shadow-xl flex flex-col gap-2'>
        <h2 className='text-xl font-bold capitalize'>Property inquiry: <span className='text-xl font-normal'>{data.title}</span></h2>
        <p className='text-slate-600'>{data.message}</p>
        <p className='text-md font-bold capitalize'>Name: <span className='text-md font-normal'>{data.name}</span></p>
        <p className='text-md font-bold capitalize'>reply email: <Link href={`mailto:${data.replyEmail}`} className='text-md font-normal text-blue-500'>{data.replyEmail}</Link></p>
        <p className='text-md font-bold capitalize'>reply phone: <Link href={`tel:${data.replyPhone}`} className='text-md font-normal text-blue-500'>{data.replyPhone}</Link></p>
        <p className='text-md font-bold capitalize'>Received: <span className='text-md font-normal'>{data.received}</span></p>
        <div className='flex gap-3'>
         <button className='bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg hover:opacity-80 capitalize'>mark as read</button>
         <button className='bg-red-600 text-white font-semibold py-2 px-3 rounded-lg hover:opacity-80 capitalize'>delete</button>
        </div>

    </div>
  )
}

export default MessageCard
