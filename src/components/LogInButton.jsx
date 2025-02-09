import "../App.css"
export default function LogInButton(props){
    return(
        <div className = "textbox fredoka" onClick={props.onClick}>
            {props.option}
        </div>
    )
}