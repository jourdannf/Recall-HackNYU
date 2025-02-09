import LoginPage from "./LogInPage"
import AppointmentPage from "./AppointmentsPage"

export default function StartPage ({userID}) {
    // If a user is logged in show them the home page
    // Otherwise show user the log in page

    if (userID == "") {
        return <LoginPage />
    }else {
        return <AppointmentPage userID={userID}/>
    }

    
}