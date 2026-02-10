"use client"
import { useSession } from 'next-auth/react'
import React, { useActionState, useEffect, useState } from 'react'
import { FaBookDead, FaBookmark, FaBookOpen, FaSave, FaShare, FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'
import PropertyShare from './PropertyShare'

import { contactPropertyAction } from '@/app/actions/contactProperty.action'
import { useFormState } from 'react-dom'


const Propertycontact = ({data}) => {
    const {data:session}=useSession()
    const [isBookmarked,setIsBookmarked]=useState(false)
    const [loading,setLoading]=useState(true)
     const initialstate={
    errors:{},
    success:false,
    error:null,
    input:{}
  }

  const [state,formAction]=useActionState(contactPropertyAction,initialstate)
    
    useEffect(()=>{
      const fetchBookMarksId=async()=>{
        
        try {
             const res=await fetch(`/api/bookmarks/${data._id}`)
             if(!res.ok){

              throw new Error("failed to fetch")
             }
            const result=await res.json()
            setIsBookmarked(result.isBookmarked)
          
        } catch (error) {
          console.log(error.message)
          return {}
        }finally{
          setLoading(false)
        }
         
      }
      fetchBookMarksId()
    },[data._id])

     useEffect(() => {
  if (state.error) {
    toast.error(state.error)
  }
  if (state.success) {
    toast.success("Successfully sent")
  }
}, [state.error, state.success])



  const handleBookMark=async()=>{
    const previousstate=isBookmarked
    setIsBookmarked(!previousstate)
  try {
    const res=await fetch(`/api/bookmarks`,{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify(data._id)})
    if(!res.ok){
      throw new Error('cant update')
    }
    const result=await res.json()
    toast.success(result.message)
  } catch (error) {
    setIsBookmarked(previousstate)
    toast.error(error.message)
    console.log(error)
  }
  }

  if(loading){
    return(
      <FaSpinner className='animate-spin'/>
    )
  }
  


  

  return (
    <div className='flex flex-col gap-6'>
     
        {isBookmarked?(

            <button className='bg-red-700 text-white font-bold text-md p-2 rounded-lg hover:opacity-80 capitalize flex justify-center items-center gap-2' onClick={handleBookMark}><FaBookmark/>bookmarked</button>
        ):(
            <button className='bg-blue-700 text-white font-bold text-md p-2 rounded-lg hover:opacity-80 capitalize flex justify-center items-center gap-2' onClick={handleBookMark}><FaBookmark/>bookmark property</button>
        )
        }
       <PropertyShare data={data}/>

     {/* contactcard */}
     <div className='bg-white px-3 py-10 flex flex-col gap-5 shadow-lg rounded-lg' >
        <h2 className='text-2xl font-bold capitalize text-center pb-6'>contact property manager</h2>
       <form action={formAction}>
        <div className='grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4'>
            <label htmlFor="" className='property-form-label'>Name</label>
            <input type="text" className='property-form-input' placeholder='enter your name' name='name' defaultValue={state.input?.name??session.user.name??''}/>
            {state.errors?.name&&(
                    <p className='col-span-2  text-red-700'>{state.errors.name[0]}</p>
            )}
          
            <label htmlFor="" className='property-form-label'>email</label>
            <input type="text" className='property-form-input' placeholder='enter your email' name='email' defaultValue={state.input.email??session.user.email??''}/>
               {state.errors?.email&&(
              <p className='col-span-2  text-red-700'>{state.errors.email[0]}</p>
            )}
            <label htmlFor="" className='property-form-label'>phone</label>
         
            <input type="text" className='property-form-input' placeholder='enter your phone' name='phone' defaultValue={state.input.phone??''}/>
            <input type="hidden"  name='property' value={data._id}/>
            {state.errors?.phone&&(
             <p className='col-span-2 text-red-700'>{state.errors.phone[0]}</p> 
            )}
        </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='property-form-label'>message</label>
            <textarea type="text" className='property-form-input rounded-none h-36' placeholder='enter your message' name='message' defaultValue={state.input.message??''}/>
            {state.errors?.message&&(
              <p className='text-red-600'>{state.errors.message}</p>
            )}
            <input type="submit" value={session.user.id===data.owner?"Cant send Message to yourself":"submit"} className='bg-blue-500 hover:opacity-80 rounded-lg p-2 mt-5 text-white text-lg disabled:bg-red-700 disabled:pointer-events-none' disabled={session.user.id===data.owner}/>
         </div>

         </form>
     </div>
    </div>
  )
}

export default Propertycontact
