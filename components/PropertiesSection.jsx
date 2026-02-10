"use client"
import React, { useEffect, useState } from 'react'

import PropertyBox from './PropertyBox'
import PaginationComponent from './PaginationComponent'
import { FaSpinner } from 'react-icons/fa'




const PropertiesSection = () => {
  const [page,setPage]=useState(1) 
  const [pageSize,setPageSize]=useState(3)
  const [totalCount,setTotalCount]=useState(0)
  const [properties,SetProperties]=useState([])
  const [loading,setLoading]=useState(false)

  const fetchData=async(page,pageSize)=>{
  try {
    setLoading(true)
    const res=await fetch(`/api/properties?page=${page}&pageSize=${pageSize}`,{cache:'no-store'})
    if(!res.ok){
      throw new Error("cant fetch data") 
    }
    const result=await res.json()
    SetProperties(result.data)
    setTotalCount(result.totalCount)
  
  } catch (error) {
    console.log(error.message)
    return []
  }finally{
    setLoading(false)
  }
}

  useEffect(()=>{
     fetchData(page,pageSize)
  },[page])
  return (
    <div className='my-5'>
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:max-w-[90%] mx-auto'>
       {!loading&&properties.length===0&&(
            <p>No data found...</p>
        )}

      {loading && (
    <div className="absolute inset-0 z-10 bg-white/50 flex items-center justify-center">
      <FaSpinner className="animate-spin text-4xl text-gray-600" />
    </div>
  )}

         {properties.map((p) => (
    <PropertyBox key={p._id} data={p} />
  ))}
  
    </div>
    <div className='flex justify-center'>
     <PaginationComponent totalCount={totalCount} page={page} pageSize={pageSize} setPage={setPage}/>
    </div>
    </div>
  )
}

export default PropertiesSection