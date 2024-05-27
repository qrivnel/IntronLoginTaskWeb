import React, { useEffect, useState } from 'react'
import '../index.css'
//Axios
import axios from 'axios'
import { PersonRow } from '../components'

//React Router
import { useNavigate } from 'react-router-dom'

interface LoginPageProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsAuth, setCurrentUser }) => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<any>()
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [warnMessage, setWarnMessage] = useState<string>('')
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get('http://dummyjson.com/users')
      .then(response => setUsers(response.data.users))
  }

  const keepLoggedIn = (username: string) => {
    if (isChecked)
      localStorage.setItem('currentUser', username)
    else
      sessionStorage.setItem('currentUser', username)
  }
  //Backend'e istek
  const handleLogin = () => {
    if (username != undefined && username != '' && password != undefined && password != '') {
      axios.get(`https://dummyjson.com/users/filter?key=username&value=${username}`)
        .then(res => {
          if (res.data.users.length !== 0)
            if (res.data.users[0].password === password) {
              setIsAuth(true)
              keepLoggedIn(username)
              setCurrentUser(res.data.users[0])
              navigate('/homepage')
            }
            else
              setWarnMessage('Kullanıcı adı veya şifre hatalı!')
          else
            setWarnMessage('Kullanıcı adı veya şifre hatalı!')
        }).catch(e => console.log(e))
    }
    else
      setWarnMessage('Kullanıcı adı ve şifre boş olamaz!')
  }

  return (
    <div className='flex flex-row bg-[#e4d7db] w-screen h-screen items-center justify-evenly'>
      <div className='flex flex-col'>
        <img src="https://www.intronglobal.com/wp-content/uploads/2023/05/Intron-Global.png" className="drop-shadow" style={{width: 251, height: 81}}></img>
        <div className='flex flex-col'>
          <input id='username' type="text" placeholder='Kullanıcı adı' className='border border-black p-1 pl-1.5 rounded-lg my-2 mt-5'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input id='password' type="password" placeholder='Parola' className='border border-black p-1 pl-1.5 rounded-lg my-2'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <h1 className='font-semibold self-center text-red-500'> {warnMessage} </h1>
        <button className='border border-black rounded-lg bg-[#caa6ba] mt-2 py-2'
          onClick={handleLogin}
        >
          <h1 className='font-semibold text-[#945279]'>Giriş yap</h1>
        </button>
        <div className='mt-2'>
          <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /> Oturumu açık tut
        </div>
      </div>

      <div className='absolute bg-gray-100 shadow-2xl shadow-[#eab3d3] right-16 border-separate border-[#caa6ba] rounded-xl overflow-auto h-5/6 max-w-[400px] max-h-[650px]'>
        {
          users != undefined ?
            users.map((user: any) => (<PersonRow key={user.id} user={user} />))
            :
            null
        }
      </div>
    </div>
  )
}

export default LoginPage;