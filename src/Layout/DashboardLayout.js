import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import { AuthContext } from '../contexts/AuthProvider';
import { getUserRole } from '../api/user';
import Spinner from '../Shared/Spinner/Spinner';
const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [role , setRole] = useState(null)
    const [loading, setLoading]  = useState(true)

    useEffect(()=>{
        setLoading(true)    
        getUserRole(user?.email)
        .then(data => {
            console.log(data)
            setRole(data)
            setLoading(false)

        })
    }, [user])
    return (
        <div className='md:flex relative min-h-screen'>
        {
            loading ? (<Spinner/>) : 
            (
                <>
                    <Sidebar role={role}></Sidebar>
            <div className=' flex-1 md:ml-64'>
                <div className='p-5'>
                    <Outlet></Outlet>
                </div>
            </div>
                </>
            )
        }
        </div>
    );
};

export default DashboardLayout;