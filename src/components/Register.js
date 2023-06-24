import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
var CryptoJS = require("crypto-js");
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    const router = useRouter()


    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setname(e.target.value)
        }
        if (e.target.name === 'email') {
            setemail(e.target.value)
        }
        if (e.target.name === 'password') {
            setpassword(e.target.value)
        }
        if (e.target.name === 'cpassword') {
            setcpassword(e.target.value)
        }
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        let pw = CryptoJS.AES.encrypt(password, 'ArhamCryptoSecretKEY').toString()
        let cpw = CryptoJS.AES.encrypt(cpassword, 'ArhamCryptoSecretKEY').toString()
        let dpw = CryptoJS.AES.decrypt(pw, 'ArhamCryptoSecretKEY').toString(CryptoJS.enc.Utf8)
        let dcpw = CryptoJS.AES.decrypt(cpw, 'ArhamCryptoSecretKEY').toString(CryptoJS.enc.Utf8)
        let formData = { name, email, pw, cpw }
        try {
            if (dpw == dcpw) {
                const response = await fetch("http://localhost:3000/api/registerData", {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token" : localStorage.getItem('authToken')
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    // console.log("Success:");
                    // window.alert("Form submited sucessfully")
                    toast.success(' Form submited sucessfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    
                    setTimeout(() => {
                        router.push('/')
                    }, 2000);
                }else{
                    toast.warning(' user with email already exists !', {
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
               
            } else {
                toast.warning(' password does not match !', {
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
                            Register your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="name" name="name" id="name" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input type="email" name="email" id="email" placeholder="name@company.com" className="  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="o o o o o o" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="password" name="cpassword" id="password" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="o o o o o o" onChange={handleChange} />
                            </div>

                            <button type="submit" className="w-full text-white dark:bg-blue-900 opacity-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-black-800" onClick={handleRegister} >Register</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already Have an account ? <Link href={props.LoginUrl} className="font-medium text-primary-600 hover:underline dark:text-primary-500">LogIn</Link>

                            </p>
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

export default Register
