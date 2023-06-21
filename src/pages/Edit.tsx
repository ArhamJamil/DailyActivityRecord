import React, { useState } from 'react'
import { Button, Modal } from 'flowbite-react';



const Edit = () => {

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const handleUpdate = async () =>{
        
    }
   

    return (
        <>
            <button onClick={() => props.setOpenModal('default')} className='px-1 mx-1 bg-gradient-to-tr from-pink-800 to-yellow-400 rounded-md text-white bg-opacity-80  border border-gray-300 focus:ring-primary-600 focus:border-primary-600 hover:border-blue-500 '>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512" className='m-2 fill-white'><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
            </button>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Update Your Record</Modal.Header>
                <Modal.Body>
                    <form className='p-4'>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project</label>
                                <input   name='projectname' type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Project" required />
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input  name='projecttitle' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Added Login or Signup" required />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">

                            <div>
                                <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Worked Hours</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        Hours
                                    </span>
                                    <input   name='projecthours' type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15" />

                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repository</label>
                                <input   name='projectrepository' type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example.git" required />
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
                                  
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea  name='projectdescription' id="message" rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description here..." ></textarea>
                            </div>
                            <div className=' '>
                                <div>
                                    <label htmlFor="repoBranch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repository Branch</label>
                                    <input  name='repoBranch' type="text" id="repoBranch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="master" required />
                                </div>

                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleUpdate}>Update</Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Edit
