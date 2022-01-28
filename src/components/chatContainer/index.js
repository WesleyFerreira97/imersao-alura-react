import React, { useState, useEffect } from 'react';
import { ChatStyle, ChatContent } from './style';
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { supaDb } from '../../../services/supadb';
import { AiOutlineArrowLeft } from "react-icons/ai";

export function ChatContainer(props) {
    const {login, avatar_url} = props.contactData;
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        supaDb.from('messages')
            .select('*')
            .order('id', { ascending: false })
            .then(({data}) => {
                setMessages(data);
            });
    }, [])

    function handleNewMessage(newMessage) {
        const message = {
          id: messages.length + 1,
          from: 'Wesley',
          text: newMessage,
        };

        supaDb
          .from('messages')
          .insert([
            message
          ])
          .then(( message ) => {
            setMessages([
                ...messages,
              message.data[0],
            ]);
          });
    
          setCurrentMessage('');
      }

    return (
        <>
            <div className='chat-container'>
                <div className='chat-container__contact-info'>
                    <div className='contact-info__image'>
                    <button className='return-button' onClick={() => props.toggleChat(false)}>
                        <AiOutlineArrowLeft />
                    </button>
                        <img src={avatar_url} alt={login} />
                    </div>
                    <h3 className='contact-info__username'>
                        {login}
                    </h3>
                </div>
                <div className='chat-container__chat-content'>
                    <ul className='chat-content__message'>
                        {messages.map((message) => (
                                <li key={message.id}>
                                    <span className='from'>{message.from} :</span>
                                    <span className='text'>{message.text}</span>
                                </li> 
                        ))}
                    </ul>
                </div>
                <form className='chat-container__input-bar'>
                    <div className='input-bar__input'>
                        <input 
                        type='text'
                        value={currentMessage}
                        placeholder='Mensagem' 
                        onChange={ (e) => {
                            setCurrentMessage(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if(e.key == "Enter") {
                                handleNewMessage(currentMessage);
                            }
                        }} />
                    </div>
                    <div className='input-bar__buttons'>
                        <button className='button-send'
                        onClick={(e) => {
                            e.preventDefault();
                            handleNewMessage(currentMessage);
                        }} ><AiOutlineSend /></button>
                        <button className='button-sticker'><BsEmojiSmile /></button>
                    </div>
                </form>
            </div>
            <style jsx>{ChatStyle}</style>
            <style jsx>{ChatContent}</style>
        </>
    );
}



