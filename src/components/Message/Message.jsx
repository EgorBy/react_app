import style from './Message.css'

export const Message = ({ avatar, time, author, message}) => {

    return ( 
    <div className = "MessageContainer">
        <div className = "MessageImage">
            <img src={avatar} alt="avatar" />
        </div>
        <div className = "MessageMain">
            <div className = "MessageInfo">
                <div className = "MessageAuthor"> {author} </div>
                <div className = "MessageTime"> {time} </div>
            </div>
            <div className = "MessageText"> {message} </div>  
        </div>
    </div>)
}