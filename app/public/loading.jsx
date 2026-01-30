'use client'
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override={
    display:'block',
}

const loading = () => {
  return (
    <div className='h-screen  flex justify-center items-center inset-0'>

   
    <ClipLoader
     color='blue'
     loading={loading} 
     size={150} 
     cssOverride={override}
     aria-label='Loading Spinner'

       />
        </div>
  )
}

export default loading
