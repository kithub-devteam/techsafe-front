import React from "react"
import { useAuth } from "../../Authentications"

const Login = () => {
    const { login } = useAuth()
    return (
        <div className="bg-red-500">
            login page hh

            <button onClick={login} className="p-10 bg-green-700 rounded-md text-white cursor-pointer hover:bg-gray-800">
                click to login
            </button>
        </div>
    )
}

export default Login