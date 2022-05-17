import React, { useState, useEffect} from 'react'
import UsersProfile from './UsersProfile'

function UserResults() {

    const URL = process.env.REACT_APP_GITHUB_URL
    const TOKEN = process.env.REACT_APP_TOKEN
    const headers = {
        Authorization: `token ${TOKEN}`,
    }

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch(
            `${URL}/users`, 
            {
                headers: headers,
            }
        )

        const data = await response.json()

        setUsers(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (

        <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                users.map(user => <UsersProfile key={user.id} />)
            }
        </div>

    )
}

export default UserResults