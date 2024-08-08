import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const KrishnaList = ({ item }) => {
    return (
        <>
            <div className='flex justify-start items-center space-x-2 py-3 text-sm shadow shadow-cyan-300 overflow-auto' key={item.id}>
                <p>{item.id}.</p>
                <img className='object-center object-cover h-10 rounded-full w-10 ' src={item.avatar} alt="" />
                <p>{item.name} </p>
                <Link to={`/now-playing-kanha/${item.id}`} className='py-1 px-4 border border-cyan-300 rounded-lg flex items-center justify-center space-x-2'><p>Play</p> <FontAwesomeIcon icon={faPlay} /></Link>

            </div>
        </>
    )
}

export default KrishnaList
