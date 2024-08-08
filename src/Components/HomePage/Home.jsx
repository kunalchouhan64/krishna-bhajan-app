import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FetchKanhaBhajans } from '../../Slices/KanhaBhajanSlice';
import FooterNav from '../Footer/FooterNav';
import UserProfile from '../Header/UserProfile';
import KrishnaCategoryComponent from '../CatogorySongComp/KrishnaCategoryComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import IndreshJiCategoryComponent from '../CatogorySongComp/IndreshJiCategoryComponent';
import BhajanList from '../KrishnaBhajan/KrishnaBhajanList';
import { FetchIndreshJiBhajans } from '../../Slices/IndreshJiBhajanSlice';
import KrishnaBhajanList from '../KrishnaBhajan/KrishnaBhajanList';
import IndreshJiBhajanList from '../IndreshJiBhajan/IndreshJiBhajanList';

function Home() {
  const dispatch = useDispatch()





  useEffect(() => {
    dispatch(FetchKanhaBhajans())
    dispatch(FetchIndreshJiBhajans())
  }, [])


  return (
    <>
      <div className='min-h-screen w-full bg-gradient-to-b from-zinc-900 via-violet-900 to-zinc-900 relative'>
        <UserProfile />
        <div className='py-6 px-3'>
          <p className='text-white font-Raleway'><FontAwesomeIcon className='px-2 text-xl' icon={faMusic} />All Krishna Ji Bhajan's</p>
          <KrishnaCategoryComponent />
        </div>
        <div className='py-2 px-3'>
          <p className='text-white font-Raleway'><FontAwesomeIcon className='px-2 text-xl' icon={faMusic} />All Indresh Ji Bhajans</p>
          <IndreshJiCategoryComponent />
        </div>

        <KrishnaBhajanList />
        <IndreshJiBhajanList />


        <FooterNav />
      </div>
    </>
  );
}

export default Home;
