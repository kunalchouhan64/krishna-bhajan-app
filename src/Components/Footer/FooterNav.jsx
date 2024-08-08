import { faHouse, faList, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const FooterNav = () => {

    const [pathloaction, SetLocation] = useState()
    const location = useLocation()



    const FetchLocationPath = async () => {
        if (location) {
            SetLocation(location.pathname)
        }
    }


    useEffect(() => {
        FetchLocationPath()
    })

    return (
        <>
            <div className='flex justify-evenly fixed bottom-0 items-center w-full py-2 text-white font-Raleway text-sm bg-gradient-to-b from-zinc-900 via-violet-900 to-zinc-900'>
                <Link to='/' className={`${pathloaction === '/' ? 'text-cyan-400' : 'text-white'} flex flex-col justify-center items-center`}>
                    <div> <FontAwesomeIcon icon={faHouse} /></div>
                    <p>Home</p>

                </Link>
                <Link to='/categories' className={` ${pathloaction === '/categories' ? 'text-cyan-400' : 'text-white'} flex flex-col justify-center items-center`}>
                    <div> <FontAwesomeIcon icon={faList} /></div>
                    <p>Category</p>

                </Link>
                <Link to='/search' className={`${pathloaction === '/search' ? 'text-cyan-400' : 'text-white'} flex flex-col justify-center items-center`}>
                    <div> <FontAwesomeIcon icon={faSearch} /></div>
                    <p>Search</p>

                </Link>
            </div>
        </>
    )
}

export default FooterNav
