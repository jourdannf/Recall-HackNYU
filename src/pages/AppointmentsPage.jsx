import NavBar from "../components/NavBar"

export default function AppointmentPage ({user}) {
    //If user is caretaker, show Nav Bar with add option
    //If user is patient, show Nav Bar with Puzzle Option

    const role = user.role;
    if (role == "caretaker") {
        const elderlyPerson = user.elderlyPerson;
    }

    return (
        <div style={{width: "1853px", margin: "auto"}}>
            {(role == "caretaker" && !elderlyPerson) && 
                <Link to="/caretaker/patient/signup" ><div>Add Elderly Person</div></Link>
            }

            

            <NavBar role = {role}/>
        </div>
    )
}