import css from 'styled-jsx/css';
import appConfig from '../../../config.json';

export const ChatStyle = css`
    .chat-container {
        height: 100%;
        width: 100%;
        background-color: ${appConfig.theme.colors.primary['800']};

        &__contact-info {
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 1.25rem 4rem;
            background-color: ${appConfig.theme.colors.primary['800']};
            border: 2px solid ${appConfig.theme.colors.primary['900']};
        }

        .contact-info__image {
            height: 100%;
            width: 100%px;
            margin-right: 1rem;
            display: flex;
            align-items: center;

            img {
                height: 50px;
                width: 50px;
                object-fit: cover;
                border-radius: 100%;
            }

            .return-button {
                color: white;
                font-size: 2rem;
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
        }

        .contact-info__username {
            color: ${appConfig.theme.colors.neutrals['100']};
            font-size: 1.25rem;
            font-family: 'Maven Pro', sans-serif;
            font-weight: 400;
            text-transform: capitalize;
        }


        &__input-bar {
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;
            background-color: ${appConfig.theme.colors.primary['900']};
            box-shadow: 0px -1px 0px 0px ${appConfig.theme.colors.neutrals['100']};
        }

        .input-bar__input {
            height: 100%;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 1rem;

            input {
                height: 60%;
                width: 100%;
                border: none;
                padding: 1rem;
                border-radius: 7px;
                color: ${appConfig.theme.colors.neutrals['100']};
                background: ${appConfig.theme.colors.primary['800']};
                outline: none;
            }
        }

        .input-bar__buttons {
            display: flex;
            align-items: center;

            button:active {
                transform: scale(1.1);
            }

            .button-sticker, .button-send {
                background-color: transparent;
                border: none;
                font-size: 1.75rem;
                color: ${appConfig.theme.colors.neutrals['000']};
                padding: .5rem;
            }

            .button-send {
                margin-right: .5rem;
            }
        }

        
    }

`;


export const ChatContent = css`
    .chat-container__chat-content {
        height: 80%;
        width: 100%;
        overflow-y: scroll;
        padding-right: 2rem;

        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background-color: #ebebeb;
            -webkit-border-radius: 10px;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: #6d6d6d; 
        }
    }

    .chat-content__message {
        height: 50%;
        margin-left: 4.5rem;

        li {
            color: ${appConfig.theme.colors.neutrals['100']};
            padding: .75rem .25rem;

            .from {
                margin-right: 1rem;
            }
        }
    }

`;