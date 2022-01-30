import React, { useState, useEffect } from 'react';
import { ChatStyle, ChatContent } from './style';
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { supaDb } from '../../../services/supadb';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Modal } from '../modal/index';
import { ButtonSendSticker } from '../stickers/index';
import { Image } from '@skynexui/components';

function realTimeMessage(addMessage) {
    return supaDb
    .from('messages')
    .on('INSERT', (response) => {
      addMessage(response.new)
    })
    .subscribe()
  }

export function ChatContainer(props) {
    const {login, avatar_url} = props.contactData;
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalItem, setModalItem] = useState('');

    useEffect(() => {
        supaDb.from('messages')
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
            };
            
            supaDb.from('messages').insert([message]).then()
            setCurrentMessage('');
        }
    }

    return (
        <>
        {modalVisible && <Modal message={modalItem} open={setModalVisible}/> }
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
                            // Inserir função de apagar mensagem aqui
                                <li key={message.id} 
                                onClick={(e) => { 
                                    // setModalItem(e.target) 
                                }} >
                                    <div className='message__wrap' >
                                        <span className='from'>{message.from} :</span>
                                        <span className='text'>
                                        {message.text.startsWith(':sticker:')
                                        ? (<Image styleSheet={{maxWidth: '4rem', maxHeight: '4rem'}} src={message.text.replace(':sticker:','')} />)
                                        : (message.text) }
                                            </span>
                                    </div>
                                    <AiOutlineArrowLeft />
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
                            console.log('componente utilizado')
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




