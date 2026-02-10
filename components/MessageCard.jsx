"use client"
import { useMessageCountProvider } from '@/context/messageCountContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'

const MessageCard = ({data}) => {
  const [read,setRead]=useState(null)
  const {setMessagecount}=useMessageCountProvider()
  const router=useRouter()
  useEffect(()=>{
     const fetchRead=async()=>{
      try {
        const res=await fetch(`/api/message/${data._id}`)
        if(!res.ok){
          throw new Error('failed to fetch')
        }
        const result=await res.json()
      
   
        setRead(result.read)
      } catch (error) {
        console.log(error.result)
        return 
      }
     }
     fetchRead()
  },[])

  const handleRead=async()=>{
    const previousstate=read
    setRead(!previousstate)

    try {
      const res=await fetch(`/api/message/${data._id}`,{method:'PUT'})
      if(!res.ok){
        throw new Error('failed to fetch')
      }
      const result=await res.json()
      
      toast.success(result.read?'Set as read':'Set as unread')
      setMessagecount(prev=>(result.read?prev-1:prev+1))
      router.refresh()

   
    } catch (error) {
      setRead(previousstate)
    
      console.log(error.message)
      
    }
   
    
  }

  const handledelete=async()=>{
    try {
       const res=await fetch(`/api/message/${data._id}`,{method:'DELETE'})
       if(!res.ok){
        throw new Error('failed to fetch')
       }
       router.refresh()
    } catch (error) {
       console.log(error.message)
    }
  }
  return (
    <div className='bg-white rounded-lg p-4 shadow-xl flex flex-col gap-2'>
        <h2 className='text-xl font-bold capitalize'>Property inquiry: <span className='text-xl font-normal'>{data.property.name}</span></h2>
        <p className='text-slate-600'>{data.message}</p>
        <p className='text-md font-bold capitalize'>Name: <span className='text-md font-normal'>{data.name}</span></p>
        <p className='text-md font-bold capitalize'>reply email: <Link href={`mailto:${data.email}`} className='text-md font-normal text-blue-500 normal-case'>{data.email}</Link></p>
        <p className='text-md font-bold capitalize'>reply phone: <Link href={`tel:${data.phone}`} className='text-md font-normal text-blue-500'>{data.phone}</Link></p>
        <p className='text-md font-bold capitalize'>Received: <span className='text-md font-normal'>{new Date(data.createdAt).toLocaleString("en-IN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true
})}</span></p>
        <div className='flex justify-between'>
         <button className={`${read?`bg-red-700`:`bg-blue-600`} text-white font-semibold py-2 px-3 rounded-lg hover:opacity-80 capitalize`} onClick={handleRead}>{read?'Message read':'Set as read'}</button>
         <button className='bg-red-600 text-white font-semibold py-2 px-3 rounded-lg hover:opacity-80 capitalize flex items-center gap-1' onClick={handledelete}><FaTrash/> delete</button>
        </div>

    </div>
  )
}

export default MessageCard
