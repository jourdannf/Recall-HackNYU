import NavBar from "../components/NavBar"

export default function AppointmentPage ({user}) {
    //If user is caretaker, show Nav Bar with add option
    //If user is patient, show Nav Bar with Puzzle Option

    const role = user.role;

    return (
        <div style={{width: "1853px", margin: "auto"}}>
            <NavBar role = {role}/>
        </div>
    )
}