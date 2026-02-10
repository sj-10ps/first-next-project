
"use client"
import React, { useEffect, useState } from 'react'

import ListedPropertyCard from './ListedPropertyCard'
import { fetchListed } from '@/utils/requests'
import { useSession } from 'next-auth/react'
import { FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'

const ProfileListings = () => {
  const {data:session}= useSession()
  const [properties,setProperties]=useState([])
  const [loading,setLoading]=useState(true)
  const [refresh,setRefresh]=useState(false)
  useEffect(()=>{
    if (!session) return
    const fetchData=async()=>{
      const res=await fetchListed(session.user.id)
      setProperties(res)
      setLoading(false)
    }
    fetchData()
  },[session,refresh])
  

  const handledelete=async(propertyId)=>{
     const confirmed=window.confirm("are you sure you want to delete?")
     if(!confirmed) return;
     try {
      const res=await fetch(`/api/properties/${propertyId}`,{method:'DELETE'})
      if(res.ok){
        setRefresh(prev=>!prev)
        toast.success("property deleted")
      }else{
        toast.error("failed to delete")
      }
     } catch (error) {
       console.log(error)
       return
     }
  }
  
  return (
    <div className='h-screen overflow-y-scroll no-scrollbar px-5 bg-white shadow-lg p-4 rounded-lg'>
        <h2 className='text-2xl font-bold capitalize'>your listings</h2>
        {loading&&<FaSpinner className='animate-spin'/>}
        {!loading&&properties.length===0&&<p>No data found</p>}
        <div className='flex flex-col gap-4 mt-4'>
             {properties.map((p)=>(
                <ListedPropertyCard key={p._id} data={p} handledelete={handledelete} />
             ))}
        </div> 
    </div>
  )
}

export default ProfileListings