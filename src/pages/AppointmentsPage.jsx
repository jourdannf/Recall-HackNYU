import NavBar from "../components/NavBar"

export default function AppointmentPage ({role}) {
    //If user is caretaker, show Nav Bar with add option
    //If user is patient, show Nav Bar with Puzzle Option

    return (
        <div style={{width: "1853px", margin: "auto"}}>
            <NavBar userID = {userID}/>
        </div>
    )
}