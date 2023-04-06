import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpCard from '../../Components/Cards/ExpCard';
import HomeCard from '../../Components/Cards/HomeCard';
import SearchForms from '../../Components/Forms/SearchForms';
import CommingSoon from '../../Shared/CommingSoon/CommingSoon';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';
import Spinner from '../../Shared/Spinner/Spinner';

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allExp, setAllExp] = useState([])
    useEffect(() => {
        fetch('expdata.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllExp(data)
            })
    }, [])
    return (
        <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20 '>
            <div className='mt-4'> 
            <SearchForms></SearchForms>
             </div>
      
            <div className='flex-1'>
                {/* Home card  */}
                <div className=''>
                    <div className='flex justify-between px-4 mt-10'>
                        <p className='text-xl font-bold'>Homes</p>
                        <Link to='/comming-soon'>
                            <p>See all</p>

                        </Link>

                    </div>
                    <div className='container pb-8 pt-2 mx-auto
                '>
                        <div className='flex flex-wrap'>
                            {
                                [...Array(3)].map((expCard, i) => <HomeCard cardData={expCard} key={i}></HomeCard>)
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
            </div>
        </div>
    );
};

export default Home;