import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const HomeCard = ({home}) => {
    return (
        <div className='lg:w-1/3 md:w-1/2
         p-4 w-full'>
            <Link to={`/service-details/${home?._id}`} 
            className='block relative h-48 rounded overflow-hidden'
            >
                <img  alt="home-img"
                 src={home?.image} 
                 className='object-cover object-center w-full h-full block '  />
            </Link>

            <div className='mt-4'>
                <h3 className='text-gray-500 text-xs tracking-widest  title-font mb-1'>{home?.location}</h3>
                <h2 className='text-gray-900 title-font text-lg font-medium'>{home?.title}</h2>
                <p className='mt-1'>$34 per person</p>
                <div className='flex mt-1'>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon> 
                <span>64</span>

                </div>

            </div>
            
        </div>
    );
};

export default HomeCard;