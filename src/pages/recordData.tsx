import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'


const recordData = () => {
    const [projectName, setname] = useState()
    const [title, settitle] = useState()
    const [projectOption, setoption] = useState()
    const [repository, setrepository] = useState()
    const [hoursWorked, sethours] = useState()
    const [date, setdate] = useState()
    const [description, setdescription] = useState()
    const [repoBranch, setrepoBranch] = useState()

    const router = useRouter()

    const handleChange = (e: any) => {
        if (e.target.name === 'projectname') {
            setname(e.target.value)
        }
        if (e.target.name === 'projecttitle') {
            settitle(e.target.value)
        }
        if (e.target.name === 'projectoption') {
            setoption(e.target.value)
        }
        if (e.target.name === 'projectrepository') {
            setrepository(e.target.value)
        }
        if (e.target.name === 'projecthours') {
            sethours(e.target.value)
        }
        if (e.target.name === 'projectdate') {
            setdate(e.target.value)
        }
        if (e.target.name === 'projectdescription') {
            setdescription(e.target.value)
        }
        if (e.target.name === 'repoBranch') {
            setrepoBranch(e.target.value)
        }
    }
    const handleRegister = async (e: any) => {
        e.preventDefault()
        let formData = { projectName, projectOption, title, date, description, hoursWorked, repository , repoBranch}
        try {

            const response = await fetch("http://localhost:3000/api/addRecords", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            console.log(response)
            if (response.ok) {
                console.log("Success:");
                router.push('/recordsData')
            }
        } catch (error) {
            console.log("error")
        }
    }
    return (
        <div>
            <>
                <div className='container  w-full mt-[15%] mb-[15%] mx-auto p-2 bg-record_tracker_container_color bg-opacity-60 rounded-3xl'>
                    <div className="container flex flex-row mx-auto m-6 justify-between">
                        <h1 className='text-[30px]  text-white px-4 inline-block my-auto'>Enter Record</h1>
                        <Link href={'/recordsData'}><button type="button" className=" mr-6 text-white  hover:bg-gradient-to-bl hover:duration-300 hover:-translate-y-1 bg-record_tracker_container_color  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Check Past Record</button></Link>
                    </div>
                    <form className='p-4'>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project</label>
                                <input name='projectname' type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Project" required onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input name='projecttitle' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Added Login or Signup" required onChange={handleChange} />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div className='my-9'>
                                <ul className='flex flex-row mx-2  my-auto'>
                                    <li>
                                        <input name='projectoption' type="checkbox" id="choose-me1" className="peer hidden " value={"web "}   onChange={handleChange} />
                                        <label htmlFor="choose-me1" className="select-none mx-1 cursor-pointer text-white  bg-record_tracker_container_color  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> Web </label>

                                    </li>
                                    <li>
                                        <input name='projectoption' type="checkbox" id="choose-me2" className="peer hidden " value={"Mobile"}  onChange={handleChange} />
                                        <label htmlFor="choose-me2" className="select-none mx-1 cursor-pointer text-white  bg-record_tracker_container_color  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> Mobile </label>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Worked Hours</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        Hours
                                    </span>
                                    <input name='projecthours' type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15" onChange={handleChange} />

                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repository</label>
                                <input name='projectrepository' type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example.git" required onChange={handleChange} />
                            </div>


                            <div>
                                <label
                                    htmlFor="date"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="projectdate"
                                    id="date"
                                    onChange={handleChange}
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea name='projectdescription' id="message" rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description here..." onChange={handleChange}></textarea>
                            </div>
                            <div className=' '>
                                <div>
                                    <label htmlFor="repoBranch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repository Branch</label>
                                    <input name='repoBranch' type="text" id="repoBranch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="master" required onChange={handleChange} />
                                </div>
                                <div className='my-5 mx-auto'>
                                    <button className="  w-full px-40  hover:duration-300 hover:translate-y-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 sm:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleRegister}>Next</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </>
        </div >
    )
}

export default recordData
