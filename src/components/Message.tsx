import {IMessage, IMessages} from "../intefaces";
import {SetStateAction} from "react";

const Message = ({msg, setMessages, messages}: { msg: IMessage, setMessages: SetStateAction<any>, messages: IMessage[] }) => {
  const like = () => {
    const newMessages = messages.map(message => {
      if ('like' in message && msg.id === message.id) return {...msg, like: !msg.like};
      return message;
    });
    setMessages([...newMessages]);
  }

  return (
    <div className={'message'}>
      <div className={'message-user-avatar'}>
        <img src={msg.avatar}/>
      </div>
      <div className={'message-center'}>
        <div className={'message-user-name'}>
          {msg.user}
        </div>
        <div className={'message-text'}>
          {msg.text}
        </div>
        <div onClick={like} className={'message-like'}>
          {msg.like ? 'Liked!' : 'Like'}
        </div>
      </div>
      <div className={'message-time'}>{msg.time.split('T')[1].split('.')[0].slice(0, 5)}</div>
    </div>)
}

export default Message;