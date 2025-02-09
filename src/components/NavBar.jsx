import "../App.css"
import { Link, useParams } from "react-router-dom"

export default function NavBar({userID, otherTab}) {
    
    const id = useParams();
    
    return (
        <div style={{position: "absolute", bottom: 0, color: "white", display: "flex", justifyContent: "space-evenly", width: "1853px", margin: "auto"}}>
            <div><Link to={`/patient/${userID}>`}> Home </Link></div>
            <div><Link to={`/patient/${userID}/puzzle`}> {otherTab}</Link></div>
        </div>
    )
}