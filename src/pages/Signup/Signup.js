import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import PrimaryButton from '../../Shared/Buttons/PrimaryButton';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const Signup = () => {
    const { createUser, updateUser, verifyEmail, user, signInWithGithub, signInWithGoogle, loading, setLoading } = useContext(AuthContext)  
    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || '/';
    // sigInWithGoogle 
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(res => {
            console.log("user result ",res.user)
            setLoading(false)
            toast.success(`welcome ${res?.user?.displayName}`)
            navigate(from , {replace: true})

        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
            toast.error(err.message)
        })
    }
    //github signIn 
    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(res => {
            console.log(res.user);
            setLoading(false)
            toast.success(`Welcome ${res?.user?.displayName}`)
            navigate(from , {replace: true})
        })
        .catch(err => {
            toast.error(err.message)
            setLoading(false)
            console.log(err)
        })
    }
    //signup 
    const signUpHandler = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const image = event.target.image.files[0]
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name, email, password, image);
        // for process the image 
        const formData = new FormData()
        console.log(formData);
        formData.append('image', image)
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API}`
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                console.log(data.data.display_url)
                const photoUrl = data.data.display_url

                // user creating here 
                createUser(email, password)
                    .then(result => {
                        console.log(result.user)
                        //update user 
                        updateUser(name, photoUrl)
                            .then( () => {
                                toast.success(`welcome ${result?.user?.displayName}`)
                                setLoading(false)
                                //email verification
                                verifyEmail().then(()=>{
                                    toast.success("check your email for verification")
                                }).catch(err =>{
                                     console.log(err.message)
                                     toast.error(err.message)
                                })

                            }).catch(err => {
                                console.log(err.message)
                                toast.error(err.message)
                            })
                            toast.success(`user created`)
                            navigate(from , {replace: true})
                    })
                    .catch((err) => {
                        console.log(err.message);
                        setLoading(false)
                        toast.error(err.message)
                    })

            }).catch(err => {
                console.log(err.message)
                setLoading(false)
                toast.error(err.message)
            })




    }
    console.log(user);
    return (
        <div className='flex justify-center  pt-8 '>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10
             bg-gray-100 text-gray-900'>
                <div className='mb-4 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Signup</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form action="" onSubmit={signUpHandler}
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

                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>Select Image:</label>
                            <input type="file" id='image' name='image'
                                accept='image/*'
                                required />
                        </div>

                        <div>
                            <label htmlFor="email" className='block mb-2 text-sm'>Email address</label>
                            <input type="email" required name='email' id='email' placeholder='Enter your email here '
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900' />
                        </div>

                        <div>
                            <div className='flex justify-between mb-2 '>
                                <label htmlFor="password" className='text-sm block mb-2'>Password</label>
                            </div>
                            <input type="password"
                                name='password'
                                id='password'
                                required
                                placeholder='****'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900' />
                        </div>



                    </div>

                    <div className='space-y-2'>
                        <div>
                            <PrimaryButton type="submit"
                                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
                                {loading ? <SmallSpinner></SmallSpinner> : 'Sign up'}
                            </PrimaryButton>
                        </div>
                    </div>
                </form>

                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>Signup with social accounts</p>
                    <div className='flex-1 h-px sm:w-16
                 dark:bg-gray-700'></div>
                </div>

                {/* social accounts icons  */}
                <div className='flex justify-center space-x-4 '>
                    <button onClick={handleGoogleSignIn} aria-label='Log in With Google' className='p-3 rounded-sm'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 fill-current'
                        >
                            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                        </svg></button>
                    <button onClick={handleGithubSignIn} aria-label='Log in with Github'
                        className='p-3 rounded-sm'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 fill-current'
                        >
                            <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
                        </svg>
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-400 '>
                    Already have an account? {' '}
                    <Link to="/login" className="hover:underline text-gray-600">
                        Sign In
                    </Link>
                    .
                </p>
            </div>

        </div>
    );
};

export default Signup;