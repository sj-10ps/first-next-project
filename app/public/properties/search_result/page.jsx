import React from 'react'
import Properties from '../page'
import PropertySearchBar from '@/components/PropertySearchBar'
import PropertiesSection from '@/components/PropertiesSection'
import PropertyBox from '@/components/PropertyBox'
import BacktoProperty from '@/components/BacktoProperty'


const fetchData=async(location,type)=>{
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/searched?location=${location}&type=${type}`,{cache:'no-store'})
        return res.json()
    } catch (error) {
          console.log(error)
    } 
}
const page = async({searchParams}) => {
    const params=await searchParams 
    const location=params.location??''
    const type=params.type??''
    const properties=await fetchData(location,type)
  return (
      <div>
      <div className='bg-blue-700 flex justify-center p-6'>
              <PropertySearchBar/>
      </div>
       <BacktoProperty/>
       <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:max-w-[90%] mx-auto'>
       
        {properties.length===0?(
            <p>No data found...</p>
        ):(
             properties.map((p)=>(
          <PropertyBox key={p._id} data={p}/>
        ))

        )
        }

       
    </div>
  
       
    </div>
  )
}

export default page