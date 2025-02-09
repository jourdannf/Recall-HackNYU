import LoginPage from "./LogInPage"
import AppointmentPage from "./AppointmentsPage"

export default function StartPage ({role}) {
    // If a user is logged in show them the home page
    // Otherwise show user the log in page

    if (role == "") {
        return <LoginPage />
    }else {
        return <AppointmentPage role={role}/>
    }

    
}