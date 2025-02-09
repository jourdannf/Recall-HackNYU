
import "../App.css"

import Lock from '../assets/images/Lock.svg'
import Profile from '../assets/images/Profile.svg'
import { useState } from "react"

export default function LoginPage () {
    const [username, setUsername] = useState("Username");
    const [password, setPassword] = useState("Password");

    return (
        <>           
            <InputText placeholderText={username} placeholderIcon={Profile} />
            <InputText placeholderText={password} placeholderIcon={Lock} />
            <LogInButton option="Sign in" />
            <LogInButton option="Log in" />
        </>
    )
}