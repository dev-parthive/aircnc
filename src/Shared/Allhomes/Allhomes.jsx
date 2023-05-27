import React, { useEffect, useState } from 'react';
import { getAllHome } from '../../api/services';
import Spinner from '../Spinner/Spinner';
import HomeCard from '../../Components/Cards/HomeCard';

const Allhomes = () => {
    const [loading, setLoading] = useState(true)
    const [homes, setHomes] = useState([])
    useEffect(()=>{
        setLoading(true)
        getAllHome()
        .then(data =>{
            console.log('allhomes : ',data);
            setHomes(data)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])
    return (
       <>
       {
        loading ? (<Spinner></Spinner>) : 
        (<section className='text-gray-600 '>
            <div className='container pb-8 pt-2 mx-auto'>
                <div className='flex flex-wrap'>
                    {homes.map(home => (
                         <HomeCard home={home} key={home._id}></HomeCard>
                    ))}

                </div>

            </div>


        </section>)
       }
       
       </>
    );
};

export default Allhomes;