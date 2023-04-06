import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'

const ExpCard = ({cardData}) => {
    console.log(cardData)
    const {title, host, image, price , rating, location  } = cardData
    return (
        <div className='lg:w-1/4 md:w-1/2 p-4 w-full '>
            <Link
             to='/comming-soon'
             className='block relative h-32 rounded overflow-hidden'
             
            >
                <img alt='e-commerce ' 
                className='object-cover object-center w-full h-full block'
                src={`${image}`}></img>
            </Link>
            <div className='mt-4'>
                <h3 className='text-gray-500  text-xs
                 tracking-widest title-font mb-1'>{location}</h3>
                 <h2 className='text-gray-700 title-font text-lg font-medium
                  '>{title}</h2>
                  <p className='mt-1'>${price} per person</p>
                  <div className='flex mt-1s'>
                  <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>
                <StarIcon className='h-4 w-4 text-green-500 '></StarIcon>  {' '}
                <span className=''>{rating}</span>
                  </div>

            </div>
            
        </div>
    );
};

export default ExpCard;