import {useState} from 'react';
import {IMessage, IMessages} from "../intefaces";
import Message from "./Message";
import OwnMessage from "./OwnMessage";
import {SetStateAction} from "react";

interface MessageListProps {
  messages: IMessage[],
  setMessages: SetStateAction<any>,
  setIsEditing: SetStateAction<any>,
  setEditMessage: SetStateAction<any>
}

const MessageList = ({messages, setMessages, setIsEditing, setEditMessage}: MessageListProps) => {
  const [lastDate, setLastDate] = useState("");
  return (
    <div className={'message-list'}>
      {messages.map((msg, idx) => {
          let newDay = false;
          let day;
          const current = new Date(msg.time);

          if (messages[idx - 1]) {
            const previous = new Date(messages[idx - 1].time);
            if (current.getDate() !== previous.getDate()) {
              newDay = true;
              if (current.getDate() === new Date().getDate()) day = "Today";
              else if (current.getDate() === new Date().getDate() + 1) day = "Yesterday";
              else day = `${current.toLocaleDateString("en", {weekday: 'long'})}, ${current.getDate()} ${current.toLocaleString('default', {month: 'long'})}`
            }
          } else {
            newDay = true;
            day = `${current.toLocaleDateString("en", {weekday: 'long'})}, ${current.getDate()} ${current.toLocaleString('default', {month: 'long'})}`
          }

          return (
            msg.user === 'Me' ?
              (<>
                {newDay ? (<div className={'messages-divider'}>{day}</div>) : null}
                <OwnMessage messages={messages} setMessages={setMessages} key={msg.id} msg={msg}
                            setIsEditing={setIsEditing} setEditMessage={setEditMessage}/>
              </>) :
              (<>
                {newDay ? (<div className={'messages-divider'}>{day}</div>) : null}
                <Message messages={messages} setMessages={setMessages} key={msg.id} msg={msg}/>
              </>)
          )
        }
      )}
    </div>
  )
}
export default MessageList;