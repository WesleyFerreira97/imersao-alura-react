import React, { useState, useEffect } from 'react';
import { ChatStyle, ChatContent } from './style';
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { supaDb } from '../../../services/supadb';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Modal } from '../modal/index';
import { ButtonSendSticker } from '../stickers/index';
import { Image } from '@skynexui/components';
const dbName = 'tabletests';
import { queryUser } from '../../../services/apiGitHub';
import { useRouter } from 'next/router';

function realTimeMessage(addMessage) {
    return supaDb
    .from(dbName)
    .on('INSERT', (response) => {
      addMessage(response.new)
    })
    .subscribe()
  }

export function ChatContainer(props) {
    const {login, avatar_url} = props.currentUser;
    const [currentUser, setCurrentUser] = useState({
        login: login || 'wesleyferreira97',
        avatar_url: avatar_url || 'https://avatars.githubusercontent.com/u/7539166?v=4',
    });
    console.log(currentUser);
    const roteamento = useRouter();
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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

    // useEffect(() => {
    //     const {login, avatar_url} = props.currentUser;
        
    //     if(login) {
    //         setCurrentUser({
    //             login: login,
    //             avatar_url: avatar_url,
    //         })
    //     }
    // }, [props.toggleUser])

    function handleNewMessage(newMessage) {
        if(newMessage.length > 0) {
            const message = {
                from: currentUser.login,
                text: newMessage,
                url: currentUser.avatar_url,
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
                        <img src={currentUser.avatar_url} alt={currentUser.login} />
                    </div>
                    <h3 className='contact-info__username'>
                        {currentUser.login}
                    </h3>
                    <button className='contact-info__return-button'
                        onClick={() => roteamento.push(`/`)}
                    >LOGOUT</button>
                </div>

                <div className='chat-container__chat-content'>
                    <ul className='chat-content__message'>
                        {messages  && messages.map((message) => (
                            // Inserir função de apagar mensagem aqui
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




