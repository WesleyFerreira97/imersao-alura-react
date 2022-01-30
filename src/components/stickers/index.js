import React from 'react';
import { Box, Text, Image } from '@skynexui/components';
import appConfig from '../../../config.json';
import { BsEmojiSmile } from "react-icons/bs";

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
      <div className='container-wrap'>
        <BsEmojiSmile 
        onClick={() => setOpenState(!isOpen)}
        style={{
          color: appConfig.theme.colors.neutrals['500'], 
          cursor: 'pointer',
          fontSize: '1.75rem',
        }} />
      {isOpen && (
        <div className='container-stickers' onClick={() => setOpenState(false)}>
          <h2 className='stickers-title'>Stickers</h2>
          <ul className='stickers-list'>
  
            {appConfig.stickers.map((sticker) => (
                <li className='sticker-item'
                  key={sticker}
                  onClick={() => {
                    console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
                    if (Boolean(props.onStickerClick)) {

                      props.onStickerClick(sticker);
                    }
                  }} >
                  <img className='image' src={sticker} />
                </li>
            ))}
          </ul>
        </div>
      )}
   
      <style jsx>{`
          ::-webkit-scrollbar {
                width: 10px;
            }
            
          ::-webkit-scrollbar-track {
              background-color: ${appConfig.theme.colors.primary[600]};
              -webkit-border-radius: 10px;
              border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb {
              -webkit-border-radius: 10px;
              border-radius: 10px;
              background: ${appConfig.theme.colors.primary[900]}; 
          }
          .container-wrap {
            position: relative;
          }
          .container-stickers {
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            position: absolute;
            background-color: ${appConfig.theme.colors.primary[800]};
            width: 300px;
            
            height: 300px;
            right: 30px;
            bottom: 30px;
            padding: 16px;
            box-shadow: rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px;
          }
          .stickers-title {
            color: ${appConfig.theme.colors.neutrals["000"]};
            font-weight: bold;
          }
          .stickers-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            flex: 1;
            padding-top: 16px;
            overflow: scroll;
            overflow-x: hidden;
          }
          .sticker-item {
            width: 50%;
            border-radius: 5px;
            padding: 10px;
          }
          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
      `}</style>
      </div>
  )
}

