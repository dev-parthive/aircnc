import { CalendarIcon } from '@heroicons/react/24/solid';
import './AddServiceForm.css'
import React from 'react';
import ReactDatePicker from 'react-datepicker';

const AddServiceForm = ({
    handleSubmit,
    arrivalDate,
    setArrivalDate,
    departureDate,
    setDepartureDate,
}) => {

    return (
        <>
            <div className='flex justify-center mt-6 mb-4'>
                <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
                    <form onSubmit={handleSubmit} className='space-y-6 ng-untouched ng-pristine ng-valid'>
                        {/* Locaiton  */}
                        <div className='space-y-1 text-sm
                    '>
                            <label htmlFor="location" className='block text-gray-600 '>Location</label>
                            <input type="text" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50 ' name='location' id='location' placeholder='Location' required />
                        </div>
                        {/* Title  */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor="title" className='block text-gray-600'>
                                Title
                            </label>
                            <input className='w-full px-4 py-3 rounded-md border border-green-300 focus:outline-green-500 bg-green-50'
                                name='title'
                                id='title'
                                placeholder='Title'
                                required />
                        </div>

                        {/* Arrival Date  and departure date */}
                        <div className='flex justify-between '>
                            <div className='shadow-md rounded-md my-2 p-3 flex justify-between  items-center'>
                                <div>
                                    <p className='block text-sm text-gray-500'>From</p>
                                    <ReactDatePicker selected={arrivalDate}
                                        onChange={data => setArrivalDate(data)} className='w-2/3'></ReactDatePicker>
                                </div>
                                <CalendarIcon className='h-5 w-5'></CalendarIcon>

                            </div>
                            {/* Departure date  */}
                            <div className='shadow-md rounded-md my-2 p-2 flex justify-between items-center'>
                                <div>
                                    <p className='block text-sm text-gray-500 '>To</p>
                                    <ReactDatePicker selected={departureDate} onChange={data => setDepartureDate(data)} className='w-2/3'></ReactDatePicker>
                                </div>
                                <CalendarIcon className='w-5 h-5'></CalendarIcon>

                            </div>
                        </div>

                        {/* Price  and Total_guest */}
                        <div className='flex justify-between gap-2 '>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor="price" className='block text-gray-600'>Price</label>
                                <input type="number" className='w-full px-4 py-3 text-gray-800 rounded-md border border-green-300 focus:outline-green-500 rounedd-md bg-green-50
                            ' placeholder='price' id='price' name='price' required />

                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor="guest" className='block text-gray-600'>Total guest</label>
                                <input type="number"
                                    className='w-full px-4 py-3 rounded-md text-gray-800 border border-green-300 focus:outline-green-600 bg-green-50' name='total_guest' id='guest'/>

                            </div>
                        </div>

                        {/* Bedrooms and Bathrooms  */}
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor="bedrooms" className='text-gray-600 block'>Bedrooms</label>
                                <input type="number"
                                    className='w-full px-4 py-3 text-gray-800 border  border-green-300 focus:outline-green-600 rounded-md bg-green-50' placeholder='bedrooms' name='bedrooms' id='bedrooms'  required/>

                            </div>
                            {/* Bathrooms  */}

                            <div className='space-y-1 text-sm'>
                                <label htmlFor="bathrooms" className='text-gray-600 block'>Bathrooms</label>
                                <input type="number"
                                    className='w-full py-3 px-4 text-gray-800 bg-green-50 border border-green-300 rounded-md focus:outline-green-600' name='bathrooms' id='bathrooms' required />

                            </div>

                        </div>


                        {/* Image upload  */}
                        <div className='flex space-x-4 items-center '>
                            <label htmlFor='image'
                                className={` p-3 text-center imageUpload  rounded-md cursor-pointer text-gray-500 font-bold border border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white`}
                            >
                                <h2 className='text-gray-600  block uploadTxt font-normal hover:text-white'>Upload Image </h2>
                                <input type="file" name='image' id='image' accept='image/*' hidden />
                            </label>


                        </div>

                        {/* Description  */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor="description" className='block text-gray-600'>

                                Description
                            </label>
                            <textarea id='description' className='block rounded-md focus:outline-green-600 bg-green-50 border border-green-300 w-full h-20 px-4 py-3 text-gray-800
                         ' name='description'>

                            </textarea>
                        </div>
                        {/* save & countinue button  */}
                        <button   type='submit' className='block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-lg focus:outline-none'>
                            Submit
                        </button>


                    </form>
                </div>

            </div>
        </>
    )
}


export default AddServiceForm;