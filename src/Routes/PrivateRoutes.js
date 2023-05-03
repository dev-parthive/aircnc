import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import SmallLoadingSpinner from '../Shared/Spinner/SmallLoadingSpinner';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(loading)
    let from = location?.state?.from?.pathname || '/login';
    if(loading){
        return <SmallLoadingSpinner></SmallLoadingSpinner>
    }
    if(user ){
        return children
    }else{
        navigate(from , {replace: true})
    }
    return (
        <></>
    );
};

export default PrivateRoutes;