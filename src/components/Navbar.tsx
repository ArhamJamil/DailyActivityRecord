import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>

      <section className='  fixed block'>
        <nav className='flex flex-row justify-between  bg-record_tracker_container_color bg-opacity-60 py-3 fixed z-10  w-screen top-0 '>
          <h1 className='text-white text-lg font-sans font-medium px-12 py-5'><Link href={'/'}>DAR | Daily Activity Records </Link></h1>
          <ul className='order-last'>
            <li className='px-8 py-3  '><button className='  order-2 flex flex-row px-3 mx-2 bg-record_tracker_container_color rounded-md text-slate-50 text-sm outline outline-offset-2 outline-1 p-1 justify-center hover:outline-blue-400'><span className='order-2 my-3 mx-3'>UserName</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='inline-block my-4 mx-2 order-last  fill-white' height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='inline-block my-2 mx-2 order-1 fill-white' height="2em" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg></button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Navbar
