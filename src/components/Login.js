import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';




const Login = (props) => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const router = useRouter()


    const handleChange = (e) => {

        if (e.target.name === 'email') {
            setemail(e.target.value)
        }
        if (e.target.name === 'password') {
            setpassword(e.target.value)
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = { email, password }
        try {
            const response = await fetch("http://localhost:3000/api/loginData", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    // "auth-token" : localStorage.getItem('authToken')
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // console.log("logged in successfully")
                let resData = await response.json()
                // console.log(resData.jwtToken)
                localStorage.setItem('authToken', resData.jwtToken)
                // localStorage.setItem('token', response.jwtToken)
                toast.success(' logged in sucessfully!', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    router.push('recordsData')
                }, 1500);

            } else {
                toast.warning('Credential not valid !', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        } catch (error) {
            toast.warning('Some Error has Occured !', {
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
                            Log in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-primary-300 bg-record_tracker_container_color bg-opacity-40 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                               <Link href={'/forgetPass'}  className="text-sm font-medium  hover:underline text-gray-500 dark:text-gray-400"> Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full text-white dark:bg-blue-900 opacity-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-black-800" >Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                                <Link href={props.registerUrl} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
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

export default Login
