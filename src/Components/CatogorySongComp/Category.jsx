import React from 'react'
import KrishnaCategoryComponent from './KrishnaCategoryComponent'
import IndreshJiCategoryComponent from './IndreshJiCategoryComponent'
import FooterNav from '../Footer/FooterNav'

const Category = () => {
  return (
    <>
      <div className='min-h-screen w-full bg-gradient-to-b from-zinc-900 via-violet-900 to-zinc-900 text-white p-4 font-Raleway'>
        <h2 className='text-center text-xl border-b border-cyan-400 py-3'>All Categoris - Bhajan's</h2>
        <p className='p-2 text-sm text-gray-300 font-Raleway'>Here you'll find all available categories of bhajan's so that you can choose you own peace. 😀😉</p>
        <p className='p-2 text-sm text-gray-300 font-Raleway'>You can click any bhajan's to listen with your internal peace.😉</p>
        <p></p>
        <div className='p-4'>
        <h2>Kanha Ji Bhajan's  -</h2>
        <KrishnaCategoryComponent/>
        
        </div>
        <div className='p-4'>
        <h2>Indresh Maharaj Ji Bhajan's  -</h2>
        <IndreshJiCategoryComponent/>
        
        </div>
        
      </div>
      <FooterNav/>
    </>
  )
}

export default Category
