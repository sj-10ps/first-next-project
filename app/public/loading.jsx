'use client'
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override={
    display:'block',
    margin:'50px auto'
}

const loading = () => {
  return (
    <ClipLoader
     color='blue'
     loading={loading} 
     size={150} 
     cssOverride={override}
     aria-label='Loading Spinner'

       />
  )
}

export default loading
