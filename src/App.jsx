import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import UserLogin from './Components/UserDetails/UserLogin'
import CurrentPlayerIndreshJi from './Components/MusicPlayer/CurrentPlayerIndreshJi'
import CurrentPlayerKanha from './Components/MusicPlayer/CurrentPlayerKanha'
import KrishnaBhajanList from './Components/KrishnaBhajan/KrishnaBhajanList'
import Category from "./Components/CatogorySongComp/Category";
import IndreshJiBhajanList from './Components/IndreshJiBhajan/IndreshJiBhajanList'
import SeachBhajan from './Components/SearchSong/SeachBhajan'


const App = () => {

  const navigate = useNavigate()


  const FetchLoggedInUser = async () => {
    try {
      const user = await JSON.parse(localStorage.getItem('user-details'))
      if (user === null) {
        navigate('/login')
      } else {
        navigate('/')
      }
    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    FetchLoggedInUser()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/search' element={<SeachBhajan />} />
        <Route path='/krishna-bhajan' element={<KrishnaBhajanList />} />
        <Route path='/indreshji-bhajan' element={<IndreshJiBhajanList />} />
        <Route path='/now-playing-kanha/:id' element={<CurrentPlayerKanha />} />
        <Route path='/now-playing-indreshji/:id' element={<CurrentPlayerIndreshJi />} />
      </Routes>

    </>
  )
}

export default App
