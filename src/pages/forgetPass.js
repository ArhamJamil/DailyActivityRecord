
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/router';
const jwt = require('jsonwebtoken')

const ForgetPass = () => {
    const [email, setemail] = useState('')
    const [userOTP, setuserOTP] = useState()
    const [first, setfirst] = useState('')
    const [second, setsecond] = useState('')
    const [third, setthird] = useState('')
    const [fourth, setfourth] = useState('')
    const [fifth, setfifth] = useState('')
    const [sixth, setsixth] = useState('')
    const [otpInput, setOtpInput] = useState(['', '', '', '', '', '']);
    const router = useRouter()

    const handleChange = (e) => {

        if (e.target.name === 'email') {
            setemail(e.target.value)
        }
        if (e.target.name === 'first') {
            setfirst(e.target.value)
        }

        if (e.target.name === 'second') {
            setsecond(e.target.value)
        }
        if (e.target.name === 'third') {
            setthird(e.target.value)
        }
        if (e.target.name === 'fourth') {
            setfourth(e.target.value)
        }
        if (e.target.name === 'fifth') {
            setfifth(e.target.value)
        }
        if (e.target.name === 'sixth') {
            setsixth(e.target.value)
        }
        if (e.target.name.startsWith('otp')) {
            const index = parseInt(e.target.name.slice(3)) - 1; // Get the index of the OTP input
            const updatedOtpInput = [...otpInput];
            updatedOtpInput[index] = e.target.value;
            setOtpInput(updatedOtpInput);
            setuserOTP(updatedOtpInput.join('')); // Join the OTP input array to get the complete OTP
        }




    }



    const handleGenerateOTP = async (e) => {
        e.preventDefault()


        let dataToBeSent = { email }
        try {
            const response = await fetch("http://localhost:3000/api/generateOTP", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToBeSent),
            });
            toast.success('OTP has been sent to your email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            let data = await response.json()

            console.log(data)
            if (data) {
                localStorage.setItem('user_id', data.userID)
                localStorage.setItem('OTP_USER', data.SMTPToken)

            } else {
                toast.warning("Unable to Fetch the Data with requested Credentials from the server ", {
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
            console.log('Server side Error : ' + error)
        }
    }

    // useEffect(() => {
    //     const delay = 10000; // Delay in milliseconds (e.g., 5000 for 5 seconds)

    //     const timer = setTimeout(() => {
    //       // Code to be executed after the delay
    //       setuserOTP(first+ second + third + fourth + fifth + sixth)
    //       console.log('Delayed code executed' + userOTP);
    //     }, delay);

    //     // Clean up the timer when the component unmounts or the dependency array changes
    //     return () => clearTimeout(timer);
    //   }, []); // Empty dependency array to run the effect only once


    const handleVerify = (e) => {
        e.preventDefault()
        // console.log("i am verify")
        // setuserOTP(first+ second + third + fourth + fifth + sixth)
        // console.log(userOTP)

        let otpToken = localStorage.getItem('OTP_USER')
        let decoded = jwt.decode(otpToken)
        // console.log(userOTP)
        if (userOTP == decoded.userOTP) {


            router.push('/updatePass')
        } else {
            toast.warning("OTP Mismatch", {
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
                        <form className="space-y-4 md:space-y-6" onSubmit={handleGenerateOTP}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company email</label>
                                <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="userOTP" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter One Time Password</label>
                                {/* <input type="password" name="userOTP" id="userOTP" placeholder="••••••••" className="  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-record_tracker_container_color bg-opacity-40 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={userOTP} onChange={handleChange} required /> */}
                                <div id="otp" className="flex flex-row justify-center text-center px-2 mt-2">
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength="1" value={otpInput[0]} name='otp1' onChange={handleChange} />
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" value={otpInput[1]} name='otp2' onChange={handleChange} />
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" value={otpInput[2]} name='otp3' onChange={handleChange} />
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" value={otpInput[3]} name='otp4' onChange={handleChange} />
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength="1" value={otpInput[4]} name='otp5' onChange={handleChange} />
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength="1" value={otpInput[5]} name='otp6' onChange={handleChange} />
                                </div>

                            </div>


                            <div className={`${userOTP ? 'hidden' : 'block'} `} >

                                <button type="submit" className="w-full text-white dark:bg-blue-900 opacity-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-black-800" >Generate OTP</button>
                            </div>
                            {userOTP && <div>
                                <button type="submit" className="w-full text-white dark:bg-blue-900 opacity-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-black-800" onClick={handleVerify}>Verify OTP</button>
                            </div>}



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

export default ForgetPass
