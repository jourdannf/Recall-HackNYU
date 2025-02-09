import InputText from "../components/InputText"
import LogInButton from "../components/LogInButton"
import "../App.css"

import Lock from '../assets/images/Lock.svg'
import Profile from '../assets/images/Profile.svg'
import { use, useState } from "react"
import { useEffect } from "react"
import axios from "axios"

import { Link } from "react-router-dom"

export default function SignUpElderlyPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [medicalCondition, setMedicalCondition] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [relation, setRelation] = useState("");
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        (async() => {
            // const param = new URLSearchParams{}});
            const result = await axios.post("http://localhost:3000/api/auth/signup", {
                "username": username , "password": password, "name": name
            })

            console.log(result);

            
        })();
    }, [submit]);

    function checkSubmission (e) {
        //Check if submission meets requirments -- don't have time to code right now
        console.log("I made it!");
        setSubmit(true);
    }

    return (
        <>           
            <InputText placeholderText="Name" placeholderIcon={Profile} handleText = {setName} value={name} />
            <InputText placeholderText="Username" placeholderIcon={Profile} handleText = {setUsername} value={username} />
            <InputText placeholderText="Password" placeholderIcon={Lock} handleText = {setPassword} value={password} />
            //Convert into Interger
            <InputText placeholderText="Age" placeholderIcon={Profile} handleText = {setAge} value={age} />
            <div className="gender-select">
                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="doesn't apply">Doesn't Apply</option>
                </select>
            </div>                    
            <InputText placeholderText="Medical Condition" placeholderIcon={Profile} handleText = {setMedicalCondition} value={medicalCondition} />
            <InputText placeholderText="Relationship" placeholderIcon={Profile} handleText = {setRelation} value={relation} />
            <Link to="/" ><LogInButton option="Sign up" onClick={checkSubmission} /></Link>
        </>
    )
}