import { Tab } from '@headlessui/react';
import React, { Fragment, useContext, useState } from 'react';
import CheckoutCart from './CheckoutCart';
import Payment from './Payment';
import ReviewHouse from './ReviewHouse';
import WhosComming from './WhosComming';
import { saveBookings } from '../../api/bookingsApi';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
  const userInfo =JSON.parse( localStorage.getItem('user-info'))
  console.log(userInfo);
   const {user} = useContext(AuthContext)
    const {state: CheckoutData} = useLocation()
    console.log('use Location: ',CheckoutData)
    console.log(user)
   
  const [bookingData, setBookingData] = useState({
    home:{
      id: CheckoutData?.homeData?._id ,
      image : CheckoutData?.homeData?.image, 
      title: CheckoutData?.homeData?.title,
      location: CheckoutData?.homeData?.from, 
      to: CheckoutData?.homeData?.to

    }, 
    host : {
      hostEmail: CheckoutData?.homeData?.host?.email,
      comment: '', 
      price: parseFloat(CheckoutData?.totalPrice), 
      guestEmail: user?.email
    }
  })
    console.log("Booking data",bookingData)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const handleBooking = () => {
      console.log(bookingData)
      saveBookings(bookingData)
      
    }
  
    return (
      <div className='md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-4'>
      {/* Details */}
      <div className='flex-1'>
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          defaultIndex={1}
        >
          <Tab.List>
            <div className='container flex flex-wrap items-center py-4 mx-auto overflow-y-auto whitespace-nowrap'>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? 'text-blue-600' : 'text-gray-600'}
                  >
                    1. Reviews house rules
                  </button>
                )}
              </Tab>

              <span className='mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? 'text-blue-600' : 'text-gray-600'}
                  >
                    2. Who's coming?
                  </button>
                )}
              </Tab>

              <span className='mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? 'text-blue-600' : 'text-gray-600'}
                  >
                    3. Confirm and pay
                  </button>
                )}
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ReviewHouse setSelectedIndex={setSelectedIndex} homeData = {{...CheckoutData?.homeData, totalNights: CheckoutData?.totalNights}}/>
            </Tab.Panel>
            <Tab.Panel>
              {/* WhosComing Comp */}
              <WhosComming
                setSelectedIndex={setSelectedIndex}
                host={CheckoutData?.homeData?.host}
                bookingData={bookingData}
                setBookingData={setBookingData}
              />
            </Tab.Panel>
            <Tab.Panel>
              {/* Payment Comp */}
              <Payment setSelectedIndex={setSelectedIndex} handleBooking={handleBooking} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Cart */}
      <CheckoutCart 
      homeData= {
        {
          ...CheckoutData?.homeData, 
          totalNights: CheckoutData?.totalNights
        }
      }
      />
    </div>
    );
};

export default Checkout;