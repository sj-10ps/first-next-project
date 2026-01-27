import Link from 'next/link'
import React from 'react'

const InfoBox = ({
    bgColor,
    Heading,
    ButtonProps,
    children
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg`}>
        <div className='flex flex-col gap-4'>
          <h2 className='text-xl font-bold capitalize'>{Heading}</h2>
          <p className='font-normal'>{children}</p>
          <Link href={`${ButtonProps.href}`} className={`${ButtonProps.bgColor} p-2 text-white font-medium w-fit rounded-lg hover:opacity-80 capitalize`} >{ButtonProps.title}</Link>
        </div>
      
    </div>
  )
}

export default InfoBox
