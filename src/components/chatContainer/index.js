import React from 'react';
import { ChatStyle } from './style';
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
export function ChatContainer(props) {

    
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
                        {/* props.message */}
                </div>
                <div className='chat-container__input-bar'>
                    <div className='input-bar__input'>
                        <input type='text' placeholder='Type a message' />
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



