import React from 'react'

//React Router
import { useNavigate } from 'react-router-dom'

//SVGS
import BackSVG from '../assets/back.svg'

interface CurrentUser {
  username: string,
  firstName: string,
  lastName: string,
  phone: string,
  university: string,
  email: string,
  age: number,
  gender: string,
  image: string,
  company: any,
  title: string,
  address: any,
  city: string,
  stateCode: string,
}

interface ProfilePageProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: CurrentUser
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ setIsAuth, currentUser, setCurrentUser }) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('currentUser')
    sessionStorage.removeItem('currentUser')
    setIsAuth(false)
    setCurrentUser(null)
    navigate('/')
  }
  return currentUser !== null && currentUser !== undefined ? <div className='flex w-screen h-screen items-center justify-center bg-[#e4d7db]'>
    <div className="flex flex-col bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full justify-center items-center">
        <svg className='self-start' width="80px" height="80px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
        onClick={()=>navigate('/homepage')}>
          <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#8b5577" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      <div className="text-center">
        <img
          className="w-48 h-48 rounded-full mx-auto mb-4"
          src={currentUser.image}
        />
        <h2 className="text-2xl font-semibold text-gray-800">{currentUser.firstName + ' ' + currentUser.lastName}</h2>
        <p className="text-gray-600"> {currentUser.username} </p>
        <div className="mt-4 flex flex-col items-start">
          <p className="text-gray-600"><strong>Yaş:</strong> {currentUser.age} </p>
          <p className="text-gray-600"><strong>Cinsiyet:</strong> {currentUser.gender} </p>
          <p className="text-gray-600"><strong>Konum:</strong> {currentUser.address.city + ' ' + currentUser.address.stateCode} </p>
          <p className="text-gray-600"><strong>Telefon:</strong> {currentUser.phone} </p>
          <p className="text-gray-600"><strong>Email:</strong> {currentUser.email} </p>
          <p className="text-gray-600"><strong>Üniversite:</strong> {currentUser.university} </p>
        </div>
      </div>
      <button className='bg-red-400 py-1.5 px-3 rounded-lg mt-3 text-gray-50 shadow-xl shadow-red-200'
        onClick={handleLogOut}>Çıkış yap</button>
    </div>
  </div> : null
}

export default ProfilePage;
