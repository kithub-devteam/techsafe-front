import React from "react"
import { useAuth } from "../../Authentications"
const Home = () => {
    const { user, logout } = useAuth()

    return (
        <div className="w-full h-screen bg-gray-400 flex justify-center  items-center">
            <div className="p-10 rounded-md flex flex-col bg-white items-center justify-center">
                <div className="text-md">Bonjour  <b>{user?.username}</b> votre email est <b>{user?.email}</b>  </div>
                <button className="bg-red-500 p-2 text-white" onClick={logout} type="button">Logout</button>
            </div>
        </div>
    )
}

export default Home