import React, { useEffect } from 'react'

//React Router
import { Routes, Route } from 'react-router-dom'

//Pages
import { LoginPage } from '../pages'


interface AuthStacksProps {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

const AuthStacks: React.FC<AuthStacksProps> = ({ setIsAuth, setCurrentUser }) => {

    return (
        <Routes>
            <Route path='/' element={<LoginPage setIsAuth={setIsAuth} setCurrentUser={setCurrentUser} />} />ƒ
        </Routes>
    )
}

export default AuthStacks;