import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [userimg, setUserImg] = useState('');
    const inputref = useRef()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && userimg) {
            localStorage.setItem('user-details', JSON.stringify({
                username,
                userimg
            }));
            navigate('/')
        }
    };


    useEffect(() => {
        inputref.current.focus()
    }, [])
    return (
        <>
            <form onSubmit={handleSubmit} className='min-h-screen w-full p-3 bg-gradient-to-b from-fuchsia-950 via-violet-800 to-violet-950 font-Raleway text-white flex flex-col justify-center items-center space-y-3'>
                <div className='py-4'>
                    <p className='font-Raleway text-xl'>
                        Welcome To Krishna World 🌍
                    </p>
                </div>
                <div>
                    <img className='border-4 shadow-2xl shadow-fuchsia-400 border-cyan-300 object-center object-cover h-52 animate-pulse rounded-full w-52 transition-all ease-linear duration-300' src="https://m.media-amazon.com/images/I/71bqMjJvm6L.jpg" alt="" />
                </div>

                <div className='py-2 px-5 space-y-2 flex justify-center items-center flex-col w-full'>
                    <p className='text-lg font-[500] text-start'>Enter Your Name:</p>
                    <input required ref={inputref} value={username} onChange={(e) => setUsername(e.target.value)} type="text" className='py-2 px-4 bg-transparent border-cyan-300 border rounded-lg shadow-sm shadow-cyan-100 outline-none focus:ring-2 focus:shadow-cyan-300 focus:shadow-md' />
                </div>

                <div className='py-2 px-5 space-y-2 flex justify-center items-center flex-col w-full'>
                    <p className='text-lg font-[500] text-start'>Upload Your Cute Pic:</p>
                    <div className='flex justify-center items-center'>
                        {userimg && (
                            <img src={userimg} alt="User profile" className='object-center object-cover rounded-full h-10 w-10' />
                        )}
                        <input required type="file" onChange={handleImageChange} className='py-2 px-4 bg-transparent border-cyan-300 border rounded-lg shadow-sm shadow-cyan-100 w-4/5' />
                    </div>

                </div>

                <div>

                </div>

                <div className='w-full flex justify-center items-center'>
                    <button type='submit' className='bg-cyan-400 py-2 px-4 w-1/2 rounded-lg shadow shadow-cyan-200'>Submit</button>
                </div>
            </form>
        </>
    );
}

export default UserLogin;
