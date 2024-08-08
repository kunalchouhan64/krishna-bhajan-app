import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const UserProfile = () => {

    const [loggeduser, SetUser] = useState([])

    const FetchUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user-details'))
        SetUser(user)
    }

    // console.log(loggeduser);


    useEffect(() => {
        FetchUser()
    }, [])

    if (loggeduser.length <= 0) {
        return <p className='text-center font-Raleway py-2 text-white'>Loading...</p>
    }
    return (
        <>
            <div className='py-2 border-b border-white flex justify-between items-center px-4 text-white font-Raleway shadow-md shadow-fuchsia-500'>
                <p>Welcome👋 {loggeduser?.username}</p>
                <img className='rounded-full object-center object-cover h-14 w-14 shadow-md shadow-fuchsia-500' src={loggeduser?.userimg} alt="" />

            </div>
        </>
    )
}

export default UserProfile
