import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
import SignIn from '@/pages/SignIn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <SignIn></SignIn>

   </div>
  )
}
