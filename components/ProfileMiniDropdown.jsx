import Link from 'next/link'
import React from 'react'

const ProfileMiniDropdown = ({signOut,setIsProfileMenu}) => {
  return (
    <div className='bg-white px-6 py-2 shadow-2xl flex flex-col gap-2 max-w-xs absolute right-10 top-15 rounded-sm'>
       <Link href={'/public/profile'}  onClick={()=>setIsProfileMenu(prev=>!prev)} className='border-b border-transparent hover:border-black duration-700'>Your Profile</Link>
       <Link href={'/public/saved_properties'} onClick={()=>setIsProfileMenu(prev=>!prev)} className='border-b border-transparent hover:border-black duration-700'>Saved Properties</Link>
       <button onClick={()=>{setIsProfileMenu(prev=>!prev);signOut()}} className='border-b border-transparent hover:border-black duration-700 text-start'>Sign Out</button>
    </div>
  )
}

export default ProfileMiniDropdown
