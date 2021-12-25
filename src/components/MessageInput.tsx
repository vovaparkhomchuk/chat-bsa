import React, {SetStateAction, useState, useEffect} from "react";
import {IMessage} from "../intefaces";

interface MessageInputProps {
  messages: IMessage[];
  setMessages: SetStateAction<any>;
  isEditing: boolean;
  editMessage: IMessage | {};
  setIsEditing: SetStateAction<any>;
  setEditMessage: SetStateAction<any>;
}

const MessageInput = ({messages, setMessages, isEditing, editMessage, setIsEditing, setEditMessage}: MessageInputProps) => {
  const [text, setText] = useState("");

  const inputHandler = (e: { target: { value: SetStateAction<string>; }; }) => setText(e.target.value);
  const sendMessage = () => {
    const dateNow = new Date();
    const newMessage: IMessage = {
      text,
      time: dateNow.toString(),
      like: false,
      id: dateNow.toString(),
      user: "Me",
      userId: "Meme",
    };
    setMessages([...messages, newMessage]);
    setText('');
  };
  const saveEdit = () => {
    const newMessages = messages.map(msg => {
      if ('id' in editMessage && msg.id === editMessage.id) return {...editMessage, text};
      return msg;
    });
    setMessages([...newMessages]);
    setText('');
    setIsEditing(false);
    setEditMessage({});
  };

  useEffect(() => {
    if (isEditing && 'text' in editMessage) setText(editMessage.text);
  }, [isEditing]);

  return (
    <div className={'message-input'}>
      <input className={'message-input-text'} onChange={inputHandler} value={text}/>
      <div className={'message-input-button'} onClick={isEditing ? saveEdit : sendMessage}>{isEditing ? 'Save' : 'Send'}</div>
    </div>
  )
}

export default MessageInput;