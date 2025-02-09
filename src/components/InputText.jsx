import "../App.css"
import LockImg from "../assets/images/Lock.svg"

export default function InputText(props){
   
    function handleInputChange (e) {
        props.handleText(e.target.value);
    }
    
    return(

        <input required type="text" placeholder={props.placeholderText} className = "textbox fredoka" value={props.value} onChange={handleInputChange} />
            // <img src= {props.placeholderIcon} />
    )
}