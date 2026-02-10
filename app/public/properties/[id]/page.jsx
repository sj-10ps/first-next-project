"use client"
import dynamic from 'next/dynamic'
const Map=dynamic(()=>import('@/components/Map'),{
  ssr:false
})





import BacktoProperty from '@/components/BacktoProperty'

import PropertyAmenities from '@/components/PropertyAmenities'
import PropertyBasicCard from '@/components/PropertyBasicCard'
import Propertycontact from '@/components/Propertycontact'

import PropertyMoreDetails from '@/components/PropertyMoreDetails'
import TopImageComponent from '@/components/TopImageComponent'
import { fetchdatabyid } from '@/utils/requests'
import { useParams,usePathname,useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import PhotoSwipe from '@/components/PhotoSwipe'



const PropertyPage = () => {
   const {data:session}=useSession()
    const {id}=useParams()
    const [property,setProperty]=useState(null)
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
       if(!id) return
       const fetchAndSetProperty =async()=>{
       try{
        const res=await fetchdatabyid(id)
        setProperty(res)
        
       }catch(err){
        console.log(err.message)
       }finally{
           setLoading(false)
       }
       }
       if(property===null){
          fetchAndSetProperty ()
       }
    },[id])
  if(loading){
     return(
      <FaSpinner className='animate-spin w-10 mx-auto h-10'/>
     )
  }  

  if(loading&&!property){
    return(
      <p className='capitalise text-center mt-10'>Data not found...</p>
    )
  }
  return (
    <div className='bg-cyan-100'>
        <TopImageComponent images={property.images}/>
        
        <BacktoProperty/>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 py-5 md:px-20 px-3'>
          <div className='lg:col-span-2'>
                <PropertyBasicCard data={property}/>
          </div>
          {/* {
            session?.user.id===property.owner&&(
               <div className='lg:row-span-3'>
              <p className='text-lg text-red-800 text-center bg-white p-6 rounded-lg shadow-2xl'>You Owns This Property</p>
            </div>
            )
          } */}
          {session?(
            <div className='lg:row-span-3'>
              <Propertycontact  data={property}/>
          </div>
          ):(
            <div className='lg:row-span-3'>
              <p className='text-lg text-red-800 text-center bg-white p-6 rounded-lg shadow-2xl'>You must login to send a message</p>
            </div>
          )
          }
          
          <div className='lg:col-span-2'>
                 <PropertyMoreDetails  data={property}/>
          </div>
          
          <div className='lg:col-span-2'>
              <PropertyAmenities  data={property}/>
          </div>
           <div className='lg:col-span-2 relative'>
             <Map  data={property}/>
           </div>
           <div className='lg:col-span-3'>
                <PhotoSwipe data={property}/>
           </div>
          
         
        </div>
    </div>
  )
}

export default PropertyPage