import "../App.css"
import { Link, useParams } from "react-router-dom"

export default function NavBar({role}) {
    
    const id = useParams();

    console.log(role);

    if (role == "caretaker") {
        return (
            <div style={{position: "absolute", bottom: 0, color: "white", display: "flex", justifyContent: "space-evenly", width: "1853px", margin: "auto"}}>
                <div><Link to={`/${role}>`}> Home </Link></div>
                <div><Link to={`/caretaker/appointments/add`}> Add</Link></div>
            </div>
        )

    }else {
        return (
            <div style={{position: "absolute", bottom: 0, color: "white", display: "flex", justifyContent: "space-evenly", width: "1853px", margin: "auto"}}>
                <div><Link to={`/${role}>`}> Home </Link></div>
                <div><Link to={`/patient/puzzle`}> Puzzle</Link></div>
            </div>
        )
    }
    
    
}