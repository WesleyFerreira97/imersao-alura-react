import React, { useState, useEffect } from 'react';
import { ChatStyle, ChatContent } from './style';
import { AiOutlineSend } from "react-icons/ai";
import { supaDb } from '../../../services/supadb';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonSendSticker } from '../stickers/index';
import { useRouter } from 'next/router';
const dbName = 'tabletests';

function realTimeMessage(addMessage) {
    return supaDb
    .from(dbName)
    .on('INSERT', (response) => {
      addMessage(response.new)
    })
    .subscribe()
  }

export function ChatContainer(props) {
    const { login, avatar_url } = props.currentUser;
    const roteamento = useRouter();
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        supaDb.from(dbName)
            .select('*')
            .order('id', { ascending: true })
            .then(({data}) => {
                setMessages(data);
        });

        const subscription = realTimeMessage((newMessage) => {
            setMessages((currentList) => {
                return [
                    ...currentList,
                    newMessage,
                ]
            })
        });
        
        return () => {
            subscription.unsubscribe();
        };
        
    }, [])

    function handleNewMessage(newMessage) {
        if(newMessage.length > 0) {
            const message = {
                from: login,
                text: newMessage,
                url: avatar_url,
            };
            
            supaDb.from(dbName).insert([message]).then()
            setCurrentMessage('');
        }
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
                    <h3 className='contact-info__username'>
                        {login}
                    </h3>
                    </div>
                    <button className='contact-info__logout'
                        onClick={() => roteamento.push(`/`)}
                    >LOGOUT</button>
                </div>

                <div className='chat-container__chat-content'>
                    <ul className='chat-content__message'>
                        {messages  && messages.map((message) => (
                            // Delete message here
                                <li key={message.id} 
                                onClick={(e) => { 
                                    // setModalItem(e.target) 
                                }} >
                                    <div className='message'>
                                        <div className='message__wrap'>
                                        <div className='message__user-image'>
                                            <img src={message.url} alt={login} />
                                        </div>
                                        <div className='message__body'>
                                            <h5 className='message__from'>{message.from}</h5>
                                            <p className='message__text'>
                                            {message.text.startsWith(':sticker:')
                                                ? (<img src={message.text.replace(':sticker:','')} />)
                                                : (message.text) }
                                            </p>
                                        </div>
                                        </div>
                                    </div>
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
                            if(e.key === 'Enter') {
                                e.preventDefault();
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
                        <div>
                        <ButtonSendSticker 
                        onStickerClick={ (sticker) => {
                            handleNewMessage(`:sticker:${sticker}`);
                            }
                        } />
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{ChatStyle}</style>
            <style jsx>{ChatContent}</style>
        </>
    );
}




