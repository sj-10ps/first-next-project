import Link from 'next/link'
import React from 'react'

const ProfileMiniDropdown = () => {
  return (
    <div className='bg-white px-6 py-2 shadow-2xl flex flex-col gap-2 max-w-xs absolute right-10 top-15 rounded-sm'>
       <Link href={'/public/profile'} className='border-b border-transparent hover:border-black duration-700'>Your Profile</Link>
       <Link href={''} className='border-b border-transparent hover:border-black duration-700'>Saved Properties</Link>
       <Link href={''} className='border-b border-transparent hover:border-black duration-700'>Sign Out</Link>
    </div>
  )
}

export default ProfileMiniDropdown
