import DataModal from '@/components/DataModal'
import Navbar from '@/components/Navbar'
import { PropTypes } from '@mui/material'
import { AppProps } from 'next/app'
import { Html, Head, Main, NextScript } from 'next/document'
import React, { useEffect, useState } from 'react'

export default function Document() {

  
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-r from-record_tracker_gradient_blue via-record_tracker_gradient_red to-record_tracker_gradient_orange">
        {/* <Navbar /> */}
        <Main />

        <NextScript />

      </body>
    </Html>
  )
}
