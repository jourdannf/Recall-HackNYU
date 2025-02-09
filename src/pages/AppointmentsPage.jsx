import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";

export default function AppointmentPage ({user}) {
    const [appointments, setAppointments] = useState({})
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        (async () => {
            const result = await axios.get("http://localhost:3000/api/appointments/appointments", {headers: {
                Authorization: `Bearer ${token}`
              }});
    
            setAppointments(result.data);
            console.log("This is the result")
            console.log(result.data);
        })();
        

    }, [token])

    //If user is caretaker, show Nav Bar with add option
    //If user is patient, show Nav Bar with Puzzle Option

    const role = user.role;
    if (role == "caretaker") {
        const elderlyPerson = user.elderlyPerson;
        
    }

    return (
        <div style={{width: "360px", margin: "auto", height: "100vh", border: "2px solid black", borderRadius: "25px", }}>
            
            {(role == "caretaker" && !user?.elderlyPerson) && 
                <>               
                <h2>Hello, {user.name}!</h2>
                <p> Welcome your wonderful elderly person to the app by adding them as a user below! </p>
                <Link to="/caretaker/patient/signup" >
                    <div className="action-button" style={{position: "relative", top: "150px"}}>
                        
                        <h3>Add Elderly Person</h3>
                    </div>
                </Link>
                </>
            }

            <h2 style={{marginBottom: "100px", marginTop: "100px"}}>Hello, {user.name}</h2>

            <h3> My appointments</h3>

            <ul>
                {appointments.map((e,i) => {
                    return <li key={i}> {e.doctor} {e.location} {e.date} </li>
                })}
            </ul>

            

            <NavBar role = {role}/>
        </div>
    )
}
