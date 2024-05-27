import React from 'react'

interface User {
    username: string,
    password: string,
    image: string
}

interface PersonRowProps {
    user: User;
}

const PersonRow: React.FC<PersonRowProps> = ({ user }) => {

    return (
        <div className=' h-[64px] m-8 flex flex-row items-center'>
            <img src={user.image} className='w-16 h-16 mr-5' />
            <div className='flex flex-col justify-between'>
                <div>Kullanıcı adı: {user.username}</div>
                <div>Parola: {user.password}</div>
            </div>
        </div>
    )
}

export default PersonRow;