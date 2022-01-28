import React, { useState, useEffect } from 'react';
import { ChatStyle } from './style';
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM0MDAyNiwiZXhwIjoxOTU4OTE2MDI2fQ.2nQ33SF-SqcD8fLMNEuTyNUB7Tr5iS_gwaKioUKJwPI';
const SUPABASE_URL = 'https://rgyyvvjmrbvgtwlhifnp.supabase.co';
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function ChatContainer(props) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        db.from('messages')
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

        db
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
                        {/* <img src={props.userData.avatar_url} alt={props.userData.login} /> */}
                    </div>
                    <div className='contact-info__username'>
                        Felipe Deshamps
                    </div>
                </div>
                <div className='chat-container__chat-content'>
                    <ul className='chat-content__message'>
                        {messages.map((message) => (
                                <li key={message.id}>
                                    {message.from}{message.text}
                                </li> 
                        ))}
                    </ul>
                </div>
                <div className='chat-container__input-bar'>
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
                        <button className='button-send'><AiOutlineSend /></button>
                        <button className='button-sticker'><BsEmojiSmile /></button>
                    </div>
                </div>
            </div>
            <style jsx>{ChatStyle}</style>
        </>
    );
}



