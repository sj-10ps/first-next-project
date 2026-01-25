import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
        <h2 className='text-center font-bold'>Homepage</h2>
        <Link href={'/properties'}>Properties</Link>
    </div>
  )
}

export default Homepage