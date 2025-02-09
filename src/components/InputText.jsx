import "../App.css"
import LockImg from "../assets/images/Lock.svg"

export default function InputText(props){
    return(
        <div className = "textbox fredoka">
            <img src= {props.placeholderIcon} /> {props.placeholderText}
        </div>
    )
}