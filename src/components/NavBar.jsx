import "../App.css"
import { Link, useParams } from "react-router-dom"

export default function NavBar({role}) {
    
    const id = useParams();

    console.log(role);

    if (role == "caretaker") {
        return (
            <div style={{position: "absolute", bottom: 20, color: "white", display: "flex", justifyContent: "space-between", width: "360px", margin: "auto" }}>
                <div><Link to={`/`} style={{color: "#3E3F37", paddingLeft:"70px"}}> Home </Link></div>
                <div><Link to={`/caretaker/appointments/add`} style={{color: "#3E3F37", paddingRight: "70px"}}> Add</Link></div>
            </div>
        )

    }else {
        return (
            <div style={{position: "absolute", bottom: 0, color: "white", display: "flex", justifyContent: "space-evenly", width: "360px", margin: "auto"}}>
                <div><Link to={`/`}> Home </Link></div>
                <div><Link to={`/patient/puzzle`}> Puzzle</Link></div>
            </div>
        )
    }
    
    
}
