import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { CalendarIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Shared/Buttons/PrimaryButton';
const SearchForms = () => {

    const  [location, setLocation] = useState('Chattogram')
    const [arrivalDate ,setArrivalDate] = useState(new Date())
    const [departureDate ,setDepartureDate] = useState(new Date (arrivalDate.getTime() + 24*60*60*1000))
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(location)
        const query = {
            location: location, 
            from : arrivalDate, 
            to : departureDate
        }
        console.log(query)
        navigate('/search-result', {state: query})

    }
    return (
        <div className='w-full max-w-sm p-6 m-auto mx-auto'>
            <h1 className='text-xl font-semibold text-gray-700'>
                Where do you want to go
            </h1>
            <form onSubmit={handleSubmit} className='mt-6'>
                <div className='shadow-md rounded-md my-2 p-3'>
                    <label htmlFor="location" className='block text-md font-bold text-gray-800'>Location</label>
                    <input value={location} onChange={ event => setLocation(event.target.value)}
                     type="text" name='location' required placeholder='Add city, Landmark or address' className='block w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40
                     ' />

                </div>
                <div className='flex justify-between'>
                    <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center '>
                        <div>
                            <p className='block text-sm text-gray-500 '>Arrival</p>
                            <DatePicker className='w-2/3' selected={arrivalDate} onChange={(date)=>setArrivalDate(date)}></DatePicker>
                        </div>
                        <CalendarIcon className='h-5 w-5'></CalendarIcon>
                    </div>

                    <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                        <div>
                            <p className='block text-sm text-gray-500'>Departure</p>
                            <DatePicker className='w-2/3' selected={departureDate} onChange={(date) => setDepartureDate(date)}></DatePicker>
                        </div>
                            <CalendarIcon className='h-5 w-5'></CalendarIcon>
                    </div>
                </div>

                <div className='mt-6'>
                    <PrimaryButton type='submit' classes={`w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md`}>
                        Search
                    </PrimaryButton>
                </div>

            </form>

        </div>
    );
};

export default SearchForms;