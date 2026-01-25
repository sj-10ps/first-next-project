'use client'
import Link from 'next/link'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'



const Properties = () => {
    const router=useRouter()

    const handleNavigation=()=>{
 router.push('/')
}
  return (
    <div>
       <h2>Properties Page</h2>
       <button className="bg-blue-400 p-2" onClick={handleNavigation}>Go back</button>
       <div className='flex flex-col'>
          <Link href={'/properties/3'}>id 3</Link>
         <Link href={'/properties/4'}>id 4</Link>
          <Link href={'/properties/5'}>id 5</Link>
       </div>
       
    </div>
  )
}

export default Properties
