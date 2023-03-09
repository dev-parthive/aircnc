import React from 'react';
import CommingSoon from '../../Shared/CommingSoon/CommingSoon';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';
import Spinner from '../../Shared/Spinner/Spinner';

const Home = () => {
    return (
        <div>
           This is the homepage
           <SmallSpinner></SmallSpinner> 
           <Spinner></Spinner>
           <CommingSoon></CommingSoon>
        </div>
    );
};

export default Home;