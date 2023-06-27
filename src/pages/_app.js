import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
// import type { AppProps } from 'next/app'
import React, { useEffect, useState,  } from 'react'
// import User from '../../model/userSchema'
var jwt = require('jsonwebtoken')


export default function App({ Component, pageProps }) {
  const [renderer, setrenderer] = useState({value: null})
  const [userKey, setuserKey] = useState(0)
  
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('authToken') 
    if (token) {
      // console.log(token)
      setrenderer({value: token})
      setuserKey(Math.random())
    }

  }, [router.query])
  
  


  return (
    <>
      <Navbar user = {renderer}></Navbar>
      <Component {...pageProps}  />
    </>
  )
}
