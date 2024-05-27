import React, { useState, useEffect } from 'react'

import AuthStacks from './AuthStacks'
import UserStacks from './UserStacks'
import axios from 'axios'

//React Router
import { useNavigate } from 'react-router-dom'


export default function RootRouter() {
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState<any>(false)
    const [currentUser, setCurrentUser] = useState<any>(null)

    const checkCurrentUser = () => {
        const localUsername = localStorage.getItem('currentUser')
        const sessionUsername = sessionStorage.getItem('currentUser')

        if (localUsername !== null) {
            axios.get(`https://dummyjson.com/users/filter?key=username&value=${localUsername}`)
                .then(res => setCurrentUser(res.data.users[0]))
            navigate('/homepage')
            setIsAuth(true)
        }
        else if (sessionUsername !== null) {
            axios.get(`https://dummyjson.com/users/filter?key=username&value=${sessionUsername}`)
                .then(res => setCurrentUser(res.data.users[0]))
            navigate('/homepage')
            setIsAuth(true)
        }
    }
    useEffect(() => {
        checkCurrentUser()
    }, [])

    return isAuth ?
        <UserStacks setIsAuth={setIsAuth} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        :
        <AuthStacks setIsAuth={setIsAuth} setCurrentUser={setCurrentUser} />
}
