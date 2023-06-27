import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { Button, Modal } from "flowbite-react";
import { Router, useRouter } from "next/router";
const jwt = require('jsonwebtoken')

const RecordTable = (props) => {
    const [openModal, setOpenModal] = useState();
    const [serialNumber, setSerialNumber] = useState(1); // Initialize serialNumber with 1
    const [projectName, setname] = useState("");
    const [title, settitle] = useState("");
    const [repository, setrepository] = useState("");
    const [hoursWorked, sethours] = useState("");
    const [date, setdate] = useState("");
    const [description, setdescription] = useState("");
    const [repoBranch, setrepoBranch] = useState("");
    const router = useRouter



    const handleChange = (e) => {
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

    const handleEdit = (e) => {
        // e.preventDefault()
        // setOpenModal("default");
        // let id = e.currentTarget.id
        // return id
        e.preventDefault();
        const id = e.currentTarget.id;
        setOpenModal(id)
        return id

    };

    const handledUpdate = async (e) => {
        let dataID = handleEdit(e)
        console.log(dataID)
        let formData = { projectName, title, date, description, hoursWorked, repository, repoBranch }
        try {

            let res = await fetch(
                `http://localhost:3000/api/updateRecords?_id=${dataID}`,
                {
                    method: "PUT", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),

                }
            );
            if (res.ok) {
                // console.log("suceess")
                setOpenModal(undefined)
                window.location.reload();
                router.push('/recordsData')

            }

        } catch (error) { }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        const id = e.currentTarget.id;
        try {
            let res = await fetch(
                `http://localhost:3000/api/deleteRecords?_id=${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    }

                }
            );
            if (res.ok) {
                // console.log("suceess")
                setOpenModal(undefined)
                window.location.reload();
                router.push('/recordsData')

            }

        } catch (error) { }
    }

    const [DataFetcher, setDataFetcher] = useState([]);
    const getUserData = async () => {
        try {
            // Fetch data from external API

            const res = await fetch(`http://localhost:3000/api/getRecords`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "auth-token" : localStorage.getItem('authToken')
                }
            });

            const data = await res.json();
            let user = jwt.decode(localStorage.getItem('authToken'))
            // let userSpecific = data.allRecords.map((item)=>{return item.user_id})
            // // console.log(data.allRecords.map((item)=>{
            //     console.log(user)
            // // }))
            // console.log(userSpecific)
            // console.log(userSpecific.forEach(function (value,i) {
            //     console.log(i, value)
            //         if (value == user.id) {
            //             console.log(value)
            //             // let dataspecific = data.allRecords.map()
            //             setDataFetcher(data.allRecords)
            //         }

            // }))
          
            // Filter records based on user ID
            const userRecords = data.allRecords.filter((item) => item.user_id === user.id);
            setDataFetcher(userRecords);


       
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUserData();
    }, []);


    return (
        <>
            <div className="container mx-auto w-full items-center bg-record_tracker_container_color bg-opacity-60 my-52 py-10 px-5 rounded-3xl">
                <div className="relative overflow-x-auto mx-4 rounded-2xl">
                    <div className="container px-14 py-6 flex flex-row flex-wrap justify-between ">
                        <h1 className="shrink w-80 text-white py-2 text-2xl">Records</h1>

                        <Link href={"/recordData"}>
                            <button
                                type="button"
                                className="text-white hover:bg-gradient-to-bl hover:duration-300 hover:-translate-y-1  bg-record_tracker_container_color  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mr-2 mb-2"
                            >
                                Enter Record
                            </button>
                        </Link>
                    </div>
                    <div className="container px-14 py-2 flex flex-row">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512 "
                                className="fill-white mz-2 my-1"
                            >
                                <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z" />
                            </svg>
                        </button>
                        <h1 className="text-sm text-white px-2">Page 1 of 17</h1>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512 "
                                className="fill-white mz-2 my-1"
                            >
                                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z" />
                            </svg>
                        </button>
                    </div>

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 bg-white bg-opacity-20 ">
                            <tr>
                                <th scope="col" className="px-2 py-3">
                                    sr.No
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Worked Hrs
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Poject
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Repository
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Branch
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {DataFetcher.map((item, index) => {
                                // console.log(item)
                                const currentSerialNumber = serialNumber + index; // Calculate current serial number
                                return (

                                    <tr
                                        key={item._id}
                                        className=" bg-record_tracker_container_color bg-opacity-60"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                                        >
                                            {currentSerialNumber}
                                        </th>
                                        <td className="px-2 py-4">{item.title}</td>
                                        <td className="px-2 py-4">{item.description}</td>
                                        <td className="px-2 py-4">{item.hoursWorked}</td>
                                        <td className="px-2 py-4">{item.date}</td>
                                        <td className="px-2 py-4">{item.projectName}</td>
                                        <td className="px-2 py-4">{item.repository}</td>
                                        <td className="px-2 py-4">{item.repoBranch}</td>
                                        <td className="px-2 py-4">
                                            <div className="flex flex-row">
                                                <button
                                                    id={item._id}
                                                    onClick={handleEdit}
                                                    className="px-1 mx-1 bg-gradient-to-tr from-pink-800 to-yellow-400 rounded-md text-white bg-opacity-80  border border-gray-300 focus:ring-primary-600 focus:border-primary-600 hover:border-blue-500 "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="20px"
                                                        viewBox="0 0 512 512"
                                                        className="m-2 fill-white"
                                                    >
                                                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    id={item._id}
                                                    onClick={handleDelete}
                                                    className="px-1 mx-1 bg-gradient-to-tr from-pink-800 to-yellow-400 rounded-md text-white bg-opacity-80  border border-gray-300 focus:ring-primary-600 focus:border-primary-600 hover:border-blue-500 ">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="20px"
                                                        viewBox="0 0 448 512"
                                                        className="m-2 fill-white"
                                                    >
                                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                                    </svg>
                                                </button>
                                                <Modal
                                                    // show={openModal === item._id}
                                                    show={openModal === item._id} // to open modal with a unique element id
                                                    onClose={() => setOpenModal(undefined)}
                                                    className="overflow-y"
                                                >
                                                    <Modal.Header className="my-2 mx-4 fill-white text-lg">Update Your Record</Modal.Header>
                                                    <Modal.Body className="" >
                                                        <form className="p-4 bg-record_tracker_container_color bg-opacity-60 rounded-xl">
                                                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                                <div>
                                                                    <label
                                                                        htmlFor="first_name"
                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                    >
                                                                        Project
                                                                    </label>
                                                                    <input
                                                                        name="projectname"
                                                                        type="text"
                                                                        id="first_name"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="Select Project"
                                                                        required
                                                                        value={projectName}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>

                                                                <div>
                                                                    <label
                                                                        htmlFor="last_name"
                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                    >
                                                                        Title
                                                                    </label>
                                                                    <input
                                                                        name="projecttitle"
                                                                        type="text"
                                                                        id="last_name"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="Added Login or Signup"
                                                                        required
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                                <div>
                                                                    <label
                                                                        htmlFor="website-admin"
                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                    >
                                                                        Total Worked Hours
                                                                    </label>
                                                                    <div className="flex">
                                                                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                                            Hours
                                                                        </span>
                                                                        <input
                                                                            name="projecthours"
                                                                            type="text"
                                                                            id="website-admin"
                                                                            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                            placeholder="15"
                                                                            onChange={handleChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                                <div>
                                                                    <label
                                                                        htmlFor="company"
                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                    >
                                                                        Repository
                                                                    </label>
                                                                    <input
                                                                        name="projectrepository"
                                                                        type="text"
                                                                        id="company"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="example.git"
                                                                        required
                                                                        onChange={handleChange}
                                                                    />
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
                                                                    <label
                                                                        htmlFor="message"
                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                    >
                                                                        Description
                                                                    </label>
                                                                    <textarea
                                                                        name="projectdescription"
                                                                        id="message"
                                                                        rows={5}
                                                                        onChange={handleChange}
                                                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="Write your Description here..."
                                                                    ></textarea>
                                                                </div>
                                                                <div className=" ">
                                                                    <div>
                                                                        <label
                                                                            htmlFor="repoBranch"
                                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                        >
                                                                            Repository Branch
                                                                        </label>
                                                                        <input
                                                                            name="repoBranch"
                                                                            type="text"
                                                                            id="repoBranch"
                                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                            placeholder="master"
                                                                            onChange={handleChange}
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button id={item._id} onClick={handledUpdate}>Update</Button>
                                                    </Modal.Footer>
                                                </Modal>


                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default RecordTable;
// const  getServerSideProps = async () => {
//     // Fetch data from external API
//     const res = await fetch(`http://localhost:3000/api/getRecords`)
//     const data = await res.json()
//     console.log(data)

//     // Pass data to the page via props
//     return { props: { data } }
//   }
