import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';
import avatarImageRobot from "./images/robotavatar.png";
import avatarImage from "./images/avatar.png";

const robotMessage = 'Привет человек! Я получил твое сообщение'

export const App = (props) => {
  const [messageList, setMessageList] = useState([])

  const sendMessageCallBack = (e) => {
    e.preventDefault()
    const author = e.target[0].value
    const message = e.target[1].value
    const time = '00:00'
    const avatar = avatarImage

    setMessageList([...messageList, { avatar, time, author, message }])
  }
  
  useEffect(() => {
    if(messageList.length > 0 && messageList.at(-1).author !== 'robot'){
      setTimeout(() => {
        setMessageList([...messageList, { time:'00:00', avatar:avatarImageRobot, message:robotMessage, author:'robot' }])
      }, 1500)
    }
  }, [messageList])
    

  return (
    <div className="App">
      <Form onSubmit={sendMessageCallBack}/>
      {messageList.map((message, index) => (
      <Message  
        key={index + message.message} 
        avatar={message.avatar}
        time={message.time} 
        author={message.author} 
        message={message.message}
      />))}
    </div>
  );
};
