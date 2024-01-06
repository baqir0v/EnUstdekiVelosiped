import React, { useState } from 'react'
import axios from "axios"
import "./index.scss"
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const handleRegister = async () => {
        const res = await axios.post("http://localhost:8000/api/user/register",
            {
                "username": username,
                "email": email,
                "password": password
            }
        )
        setUsername("")
        setemail("")
        setpassword("")
    }

    return (
        <>
            <div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' />
                <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
                <button onClick={() => {
                    handleRegister()
                }}>Sign Up</button>
                <Link to={"/login"}>Login</Link>
            </div>
        </>
    )
}

export default SignUp