import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    // const {name} = useContext(AuthContext)
    // console.log(user)
    return (
        <header className='text-gray-900 shadow-sm'>
            <div className='mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center'>
                <Link to="/" className=''>
                    <span className='ml-3 text-2xl font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0'>Aircnc</span>
                </Link>
                <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;