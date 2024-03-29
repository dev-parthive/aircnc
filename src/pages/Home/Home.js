import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpCard from '../../Components/Cards/ExpCard';
import HomeCard from '../../Components/Cards/HomeCard';
import SearchForms from '../../Components/Forms/SearchForms';
import CommingSoon from '../../Shared/CommingSoon/CommingSoon';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';
import Spinner from '../../Shared/Spinner/Spinner';
import { getAllHome } from '../../api/services';

const Home = () => {
    console.log('Firebase domain',process.env.REACT_APP_authDomain)
    const [loading, setLoading] = useState(false)
    const [allExp, setAllExp] = useState([])
    const [homes, setHomes] = useState([])
    useEffect(() => {
        setLoading(true)
        getAllHome()
        .then(data => setHomes(data))
        .catch(err => console.log(err))
        fetch('expdata.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllExp(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20 '>
            <div className='mt-4'> 
            <SearchForms></SearchForms>
             </div>
      
            {
                loading ? (<Spinner></Spinner>)
                 : 
                 
                (<div className='flex-1'>
                {/* Home card  */}
                <div className=''>
                    <div className='flex justify-between px-4 mt-10'>
                        <p className='text-xl font-bold'>Homes</p>
                        <Link to='/all-homes'>
                            <p>See all</p>

                        </Link>

                    </div>
                    <div className='container pb-8 pt-2 mx-auto
                '>
                        <div className='flex flex-wrap'>
                            {
                                homes.slice(0,3).map((home, i) => <HomeCard home={home} key={i}></HomeCard>)
                            }
                        </div>
                    </div>

                </div>

                {/* Experience  cards  */}

                <div className=''>
                    <div className='flex justify-between px-4'>
                        <p className='text-xl font-bold'>Experience</p>
                        <Link to='/comming-soon'>
                            <p>See all</p>

                        </Link>

                    </div>
                    <div className='container pb-8 pt-2 mx-auto
                '>
                        <div className='flex flex-wrap'>
                            {
                                allExp.slice(0, 4).map((expCard, i) => <ExpCard cardData={expCard} key={i}></ExpCard>)
                            }
                        </div>
                    </div>

                </div>
            </div>)
            }
        </div>
    );
};

export default Home;