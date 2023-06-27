import Home from '@/pages'
import App from '@/pages/_app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
var jwt = require('jsonwebtoken')


const Navbar = (props) => {
  const [loginUser, setloginUser] = useState()
  const router = useRouter()
  // console.log(props)
  // console.log(RenderLogout.value)
  // if (props.render === true) {
  //   console.log("i am hello")
  //   setRenderLogout(props.render)
  // }
  // useEffect(()=>{
  //   setRenderLogout({value: props.user})
  //   console.log(RenderLogout)
  // },[])

  const handleLogout = async () => {
    localStorage.removeItem('authToken')
    props.user.value = null
    if (props.user.value == null) {
      toast.success(' Logging Out !', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setTimeout(() => {
        router.push('/')
      }, 1000)

    }

  }
  // console.log(props.user.value)

  try {

    let data_id = jwt.decode(props.user.value)
    console.log(data_id.id)
    fetch(`http://localhost:3000/api/getUserData?_id=${data_id.id}`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",

      }
    }).then(async (res) => {
      let data = await res.json()
      // console.log(data.data.name)
      // console.log(data.name)
      setloginUser(data.data.name)
    })
  } catch (error) {
    

  }




  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <section className='  fixed block'>
        <nav className='flex flex-row justify-between  bg-record_tracker_container_color bg-opacity-60 py-3 fixed z-10  w-screen top-0 '>
          <h1 className='text-white text-lg font-sans font-medium px-12 py-5'><Link href={'/'}>DAR | Daily Activity Records </Link></h1>
          <ul className='order-last'>
            {props.user.value && <li className='px-8 py-3  '>


              <button onClick={handleLogout} className="inline-flex items-center  border-0 py-2 px-3 focus:outline-none bg-record_tracker_container_color hover:bg-gray-200  rounded-xl text-base text-white hover:text-blue-700 hover:translate-y-1 duration-300 mt-4 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mx-3 fill-white' height="2.5em" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>

                {loginUser}

                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 mx-3" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>

              </button>
            </li>}

          </ul>
        </nav>
      </section>

    </>
  )
}

export default Navbar
