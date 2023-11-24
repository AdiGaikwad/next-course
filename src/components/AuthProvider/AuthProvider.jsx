"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"

const Authprovider = ({children}) => {
  return (
    // <h1>
    // hiii
    // </h1>
    <SessionProvider>
    {children}
    </SessionProvider>
  )

}

export default Authprovider
