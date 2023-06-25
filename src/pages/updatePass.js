import React, { useState } from 'react'
const jwt = require("jsonwebtoken");
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
var CryptoJS = require("crypto-js");
import { useRouter } from 'next/router';


const updatePass = () => {

    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const router = useRouter()
    const handleChange = (e) => {

        if (e.target.name === 'password') {
            setpassword(e.target.value)
        }
        if (e.target.name === 'cpassword') {
            setcpassword(e.target.value)
        }

    }
    const handledUpdate = async (e) => {
        e.preventDefault()
        let dataID = localStorage.getItem('user_id')
        let pw = CryptoJS.AES.encrypt(password, 'ArhamCryptoSecretKEY').toString()
        let cpw = CryptoJS.AES.encrypt(cpassword, 'ArhamCryptoSecretKEY').toString()
        let dpw = CryptoJS.AES.decrypt(pw, 'ArhamCryptoSecretKEY').toString(CryptoJS.enc.Utf8)
        let dcpw = CryptoJS.AES.decrypt(cpw, 'ArhamCryptoSecretKEY').toString(CryptoJS.enc.Utf8)
        let Data = { pw, cpw}
        try {
            if (dpw == dcpw) {


                let res = await fetch(
                    `http://localhost:3000/api/updatePassword?_id=${dataID}`,
                    {
                        method: "PUT", // or 'PUT'
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(Data),

                    }
                );
                if (res.ok) {
                    localStorage.removeItem('user_id')
                    localStorage.removeItem('OTP_USER')
                    toast.warning("Redirecting . . .", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(()=>{
                        router.push('/')
                    }, 1500)
                    

                }
            }else{
                toast.warning("Password Incorrect", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        } catch (error) { 
            toast.warning("some error has occured", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div>
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
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-50 ">

                <div className="w-full  rounded-lg shadow dark:border my-48 sm:max-w-md xl:p-0 bg-record_tracker_container_color bg-opacity-60 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Reset Password
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handledUpdate}>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="cpassword" name="cpassword" id="cpassword" placeholder="••••••••" className="  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required />
                            </div>

                            <button type="submit" className="w-full text-white dark:bg-blue-900 opacity-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-black-800"  >Next</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Powered by : ForteWiz Systems

                            </p>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default updatePass
