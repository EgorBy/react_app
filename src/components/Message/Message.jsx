import style from './Message.css'
import avatarImage from "../../images/avatar.png"

export const Message = () => {

    const name = "Егор"
    const text = "Привет, мир!"
    const time = "11:30"


    return ( 
    <div className = "MessageContainer">
        <div className = "MessageImage">
            <img src={avatarImage} alt="avatar" />
        </div>
        <div className = "MessageMain">
            <div className = "MessageInfo">
                <div className = "MessageAuthor"> {name} </div>
                <div className = "MessageTime"> {time} </div>
            </div>
            <div className = "MessageText"> {text} </div>  
        </div>
    </div>)
}