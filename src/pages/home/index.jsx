import React from "react"
import { useAuth } from "../../Authentications"
const Home = () => {
    const { user, logout } = useAuth()

    return (
        <div className="w-full h-screen bg-white">
            Home page {user?.username} votre email est {user?.email}  click to logout
             <button className="bg-red-500" onClick={logout} type="button">
                here

            </button>
        </div>
    )
}

export default Home