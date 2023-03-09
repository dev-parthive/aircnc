import React from 'react';

const Signup = () => {
    return (
        <div className='flex justify-center  pt-8 '>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10
             bg-gray-100 text-gray-900'>
                <div className='mb-4 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Signup</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form action=""
                className='space-y-4 '
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='name'
                            className='block mb-2 text-sm'
                            >Name</label>
                            <input type="text" name='name' id='name' required placeholder='Enter Your Name Here' 
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200
                             text-gray-900' />
                        </div>
                    </div>
                </form>

            </div>
            
        </div>
    );
};

export default Signup;