import React, { useContext, useEffect, useState } from 'react';
import BecomeHostForm from '../../Components/Forms/BecomeHostForm';
import { getImageURL } from '../../api/imageUpload';
import { AuthContext } from '../../contexts/AuthProvider';
import { getUserRole, hostRequest } from '../../api/user';
import { toast } from 'react-hot-toast';

const BecomeAHost = () => {

    const {user} = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        getUserRole(user?.email)
        .then(data =>{
             console.log(role)
            setRole(data)
            setLoading(false)
            })
    }, [user])
    const handleSubmit = (event) =>{
        event.preventDefault()
        const location = event.target.location.value;
        const image = event.target.image.files[0]
        console.log(image)
        getImageURL(image).then(data =>{ 
            console.log("Image upload data ",data)
        const hostData = {
            location, 
            documentImg: data, 
            role: "requested", 
            email: user?.email
        }
        hostRequest(hostData).then(data => {
            console.log(data)
            toast.success("Request sent to the Admin!")
        })
        console.log(hostData)
        
        })

      


    }
    return (
        <>
        {
            role === "requested"  ? (
                <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
                    Request Sent, wait for admin approval

                </div>
            ) : 
            <>{!loading &&  <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>}</>
        }
        </>
    );
};

export default BecomeAHost;