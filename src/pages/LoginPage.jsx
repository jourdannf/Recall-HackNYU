import InputText from "../components/InputText"
import LogInButton from "../components/LogInButton"
import "../App.css"

import Lock from '../assets/images/Lock.svg'
import Profile from '../assets/images/Profile.svg'
import { use, useState } from "react"
import { useEffect } from "react"
import axios from "axios"

export default function LoginPage ({user, changeUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        (async() => {
            
            const result = await axios.post("http://localhost:3000/login", {
                "username": username , "password": password
            })

            if (result.data) {
                changeUser(result.data);
            } 

            
        })();
    }, [submit]);

    function checkSubmission (e) {
        //Check if submission meets requirments -- don't have time to code right now
        console.log("I made it!");
        setSubmit(true);
    }

    if (user) {

    }

    return (
        <>           
            <InputText placeholderText="Username" placeholderIcon={Profile} handleText = {setUsername} value={username} />
            <InputText placeholderText="Password" placeholderIcon={Lock} handleText = {setPassword} value={password} />
            <LogInButton option="Sign in" />
            <LogInButton option="Log in" onClick={checkSubmission} />
        </>
    )
}