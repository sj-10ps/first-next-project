"use client"
import { createContext, useContext, useState } from "react"

const messageCountContext=createContext()

import React from 'react'

export function MessageCountProvider({children}){
      const [messagecount,setMessagecount]=useState(0)
    return(
        <messageCountContext.Provider value={{messagecount,setMessagecount}}>
             {children}
        </messageCountContext.Provider>
    )
}

export function useMessageCountProvider(){
    return useContext(messageCountContext)
}
