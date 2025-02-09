import LoginPage from "./LogInPage"
import AppointmentPage from "./AppointmentsPage"
import { useState } from "react";

export default function StartPage ({role}) {
    // If a user is logged in show them the home page
    // Otherwise show user the log in page
    console.log(role);

    const [user, setUser] = useState("")

    if (user == "") {
        return <LoginPage user={user} changeUser={setUser} />
    }else {
        return <AppointmentPage user={user}/>
    }

    
}