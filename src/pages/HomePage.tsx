import React, { useEffect } from 'react'

//React Router
import { useNavigate } from 'react-router-dom'

interface CurrentUser {
  username: string,
  firstName: string,
  image: string
}

interface HomePageProps {
  currentUser: CurrentUser;
}

const HomePage: React.FC<HomePageProps> = ({ currentUser }) => {
  const navigate = useNavigate()


  return currentUser !== null && currentUser !== undefined ?
    <div className='flex flex-col w-screen h-screen items-center justify-center bg-[#e4d7db]'>
      <div className='flex flex-col border border-gray-300 px-10 pb-5 pt-10 rounded-xl justify-center items-center bg-white shadow-2xl'>
        <img src={currentUser.image} className='border border-black rounded-lg animate-pulse' />
        <h1 className='font-bold text-center my-5'>Hoşgeldin {currentUser.firstName}</h1>
        <button className='bg-[#caa6ba] text-gray-100 border rounded-lg px-3 py-1' onClick={() => navigate('/profilepage')}>Profil</button>
      </div>
    </div>
    : null
}

export default HomePage;