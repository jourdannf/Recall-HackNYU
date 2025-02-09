import "../App.css";

import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";

export default function AppointmentPage ({user}) {
    //If user is caretaker, show Nav Bar with add option
    //If user is patient, show Nav Bar with Puzzle Option

    const role = user.role;
    if (role == "caretaker") {
        const elderlyPerson = user.elderlyPerson;
    }

    return (
        <div style={{width: "360px", margin: "auto", height: "100vh", border: "2px solid black", borderRadius: "25px", }}>
            
            {(role == "caretaker" && !user?.elderlyPerson) && 
                <>               <h2>Hello, {user.name}!</h2>
                <p> Welcome your wonderful elderly person to the app by adding them as a user below! </p>
                <Link to="/caretaker/patient/signup" >
                    <div className="action-button" style={{position: "relative", top: "150px"}}>
                        
                        <h3>Add Elderly Person</h3>
                    </div>
                </Link>
                </>
            }

            

            <NavBar role = {role}/>
        </div>
    )
}