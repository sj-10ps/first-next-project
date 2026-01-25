"use client"
import { useParams,usePathname,useSearchParams } from 'next/navigation'
import React from 'react'


const Pagewithid = () => {
    const {id}=useParams()
    const searchparams=useSearchParams()
    const name=searchparams.get('name')
    const pathname=usePathname()
  return (
    <div>Page with id {id} <br /> {name} <br /> {pathname}</div>
  )
}

export default Pagewithid