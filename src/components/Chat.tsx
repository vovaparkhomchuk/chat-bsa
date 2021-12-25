import React, {useState, useEffect} from 'react';
import Preloader from "./Preloader";
import MessageList from "./MessageList";
import Header from "./Header";
import MessageInput from "./MessageInput";
import {IIncomingMessage, IMessage} from "../intefaces";

function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMessage, setEditMessage] = useState<IMessage | {}>({});

  const messageHandler = (msg: IIncomingMessage) => {
    const message: IMessage = {
      text: msg.text,
      avatar: msg.avatar,
      time: msg.createdAt,
      like: false,
      id: msg.id,
      user: msg.user,
      userId: msg.userId,
    };
    return message;
  }

  useEffect(() => {
    fetch('https://edikdolynskyi.github.io/react_sources/messages.json')
      .then(res => res.json())
      .then(res => setMessages([...res.map((msg: IIncomingMessage) => messageHandler(msg))]));
  }, []);

  useEffect(() => {
    const list = document.getElementsByClassName('message-list')[0];
    if (messages.length > 0) {
      list.scrollTop = list.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat">
      {messages.length > 0 ? (
        <>
          <Header messages={messages}/>
          <MessageList messages={messages} setMessages={setMessages} setIsEditing={setIsEditing}
                       setEditMessage={setEditMessage}/>
          <MessageInput messages={messages} setMessages={setMessages} isEditing={isEditing}
                        editMessage={editMessage} setIsEditing={setIsEditing} setEditMessage={setEditMessage} />
        </>
      ) : <Preloader/>}
    </div>
  );
}

export default Chat;
