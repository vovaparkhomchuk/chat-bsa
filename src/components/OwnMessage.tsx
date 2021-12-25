import {IMessage} from "../intefaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faEdit, faHeart} from '@fortawesome/free-solid-svg-icons'
import {SetStateAction} from "react";

interface OwnMessageProps {
  msg: IMessage;
  messages: IMessage[];
  setMessages: SetStateAction<any>;
  setIsEditing: SetStateAction<any>;
  setEditMessage: SetStateAction<any>;
}

const OwnMessage = ({msg, messages, setMessages, setIsEditing, setEditMessage}: OwnMessageProps) => {

  const deleteMessage = () => {
    const newMessages = messages.filter(message => message.id !== msg.id);
    setMessages([...newMessages]);
  }

  const editMessage = () => {
    setIsEditing(true);
    setEditMessage(msg);
  };

  const hours = new Date(msg.time).getHours()
  const minutes = new Date(msg.time).getMinutes()

  return (
    <div className={'own-message'}>

      <div onClick={editMessage} className={'message-edit'}>
        <FontAwesomeIcon icon={faEdit}/>
      </div>
      <div className={'message-text'}>
        {msg.text}
      </div>
      <div className={'message-time'}>{hours}:{minutes > 9 ? minutes : '0' + minutes}</div>
      <div onClick={deleteMessage} className={'message-delete'}>
        <FontAwesomeIcon icon={faTrash}/>
      </div>

    </div>)
}

export default OwnMessage;