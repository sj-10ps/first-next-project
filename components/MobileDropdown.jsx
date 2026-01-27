
import React from 'react'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const MobileDropdown = ({isLoggedIn}) => {
    const pathname=usePathname()
  return (
    <div className=' bg-blue-700 p-2 flex flex-col gap-2 '>
        <Link href={'/public'} className={`${pathname==="/public"?'bg-black':''} nav-btn`}>Home</Link>
        <Link href={'/public/properties'} className={`${pathname==="/public/properties"?'bg-black':''} nav-btn`}>Properties</Link>
        {isLoggedIn&&(
         <Link href={'/public/properties/add'} className={`${pathname==="/public/properties/add"?'bg-black':''} nav-btn`}>Add Property</Link>
        )}
       {!isLoggedIn&&(
        <div className="flex bg-gray-600 hover:bg-gray-800 px-3 py-2 gap-2 items-center rounded-lg">
                   <FaGoogle className="text-white"/>
                    <span className="text-lg text-white">Login or Register</span>
        </div>

       )}
        
    </div>
  )
}

export default MobileDropdown