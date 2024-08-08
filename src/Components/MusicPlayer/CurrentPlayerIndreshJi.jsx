import { faArrowLeft, faClock, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import bhajan from '../../../music_data/kanha_bhajans/achutam_keshavam.mp3'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FooterNav from '../Footer/FooterNav';

const CurrentPlayerIndreshJi = () => {

    const { id } = useParams()
    const [currentbhajan, SetCurrentBhajan] = useState([]);
    const [toggleheart, SetToggleHeart] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    // Access Redux store directly within the component
    const bhajan = useSelector((store) => store?.indreshji_bhajan?.items?.audios[id - 1]);
    const FetchBhajan = async () => {
        try {
            if (bhajan) {
                SetCurrentBhajan(bhajan);
            }
        } catch (err) {
            console.log(err);

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        FetchBhajan();
    }, [bhajan]);

    console.log('Current Bhajan --->>', currentbhajan);


    if (isLoading) {
        return <div>Loading....</div>;
    }
    return (
        <>
            <div className='min-h-screen w-full bg-gradient-to-b from-zinc-900 via-violet-900 to-zinc-900 p-5 font-Raleway flex flex-col items-center justify-between'>
                <Link to="/" className='text-white flex justify-start items-center space-x-2 w-full'>
                    <FontAwesomeIcon className='text-cyan-400 text-lg' icon={faArrowLeft} />
                    <p>Back To Home</p>
                </Link>
                <div>
                    <img className='border-4 shadow-2xl shadow-fuchsia-400 border-cyan-300 object-center object-cover h-52 animate-pulse rounded-full w-52' src={`../../${currentbhajan.avatar}`} alt="" />
                </div>
                <div className='text-white font-Montserrat w-full flex justify-between items-center'>
                    <div>
                        <p className='text-lg'>{currentbhajan?.name}</p>
                        <span className='text-sm text-gray-300 font-Raleway'>Indresh Ji Maharaj Bhajan</span>
                    </div>
                    <div className='text-center'>
                        <FontAwesomeIcon onClick={() => SetToggleHeart(!toggleheart)} className={`text-3xl transition-all ease-linear duration-300 ${toggleheart ? 'text-pink-600' : 'text-white'} `} icon={faHeart} />


                    </div>
                </div>
                <div className='w-full pb-14'>
                    <AudioPlayer
                        className='bg-transparent w-full text-white border border-cyan-500 shadow-md shadow-fuchsia-500 rounded-lg'
                        style={{ color: 'white' }}
                        autoPlay
                        src={`../../../${currentbhajan?.url}`}
                        onPlay={e => console.log("onPlay")}
                    // other props here
                    />
                </div>
            </div>
            <FooterNav />
        </>
    )
}

export default CurrentPlayerIndreshJi
