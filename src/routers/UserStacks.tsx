import React, { useEffect } from 'react'

//React Router
import { Routes, Route } from 'react-router-dom'

//Pages
import { HomePage, ProfilePage } from '../pages'

interface CurrentUser {
  username: string,
  firstName: string,
  image: string,
}
interface UserStacksProps {
  currentUser: CurrentUser;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

const UserStacks: React.FC<UserStacksProps> = ({ setIsAuth, currentUser, setCurrentUser }) => {
  return (
    <Routes>
      <Route path='/homepage' element={<HomePage currentUser={currentUser} />} />
      <Route path='/profilepage' element={<ProfilePage setIsAuth={setIsAuth} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
    </Routes>
  )
}

export default UserStacks;