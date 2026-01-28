'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/images/logo.png'
import Link from 'next/link'

const Footer = () => {
  const date=new Date().getFullYear()
  return (
    <div className='bg-gray-200 px-12 py-3 '>
       <div className='flex flex-col gap-3 items-center md:justify-between md:flex-row'>
        <Image src={Logo} alt='' className='w-8 h-8'/>
          <div className='space-x-2'>
                <Link href={'/public/properties'} >Properties</Link>
                <Link href={'/'} >Terms of Service</Link>
          </div>
          <p>© {date} Done By Sooraj</p>
       </div>
    </div>
  )
}

export default Footer
