'use client'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
import SignIn from '@/pages/SignIn'
import { useEffect ,useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  
  return (
   <div>
    {/* <Navbar render ={renderer} /> */}
    <SignIn></SignIn>

   </div>
  )
}
