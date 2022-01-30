import css from 'styled-jsx/css';
import appConfig from '../../../config.json';

export const ChatStyle = css`
    .chat-container {
        height: 100%;
        width: 100%;
        background-color: ${appConfig.theme.colors.primary['800']};
        display: flex;
        flex-direction: column;

        &__contact-info {
            height: 70px;
            width: 100%;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            padding: 1.25rem 4rem;
            background-color: ${appConfig.theme.colors.primary['800']};
            border-bottom: 1px solid ${appConfig.theme.colors.primary['600']};
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
/* height: 10%; */
/* flex: 1 0 0; */
            height: 70px;
            flex-shrink: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .5rem 1rem;
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
        /* height: 80%; */
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-right: 2rem;
        padding-bottom: 1rem;
        margin-bottom: .4rem;
        display: flex;
        flex-direction: column-reverse;
        flex: 1;

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

    @media (min-width: 992px) {
        .chat-content__message {
            margin-left: 3.5rem !important;
        }
    }

    .chat-content__message {
        /* height: 50%; */
        margin-left: 0;

        li {
            /* height: 50px; */
            /* padding: 1rem; */
            color: ${appConfig.theme.colors.neutrals['100']};
            padding: .4rem;
            font-size: .9rem;
            /* margin: .5rem 0; */
            position: relative;
            cursor: pointer;

          
            .message {
                height: 100%;
                /* position: absolute; */
                display: flex;
                align-items: center;
                /* background-color: ${appConfig.theme.colors.primary['600']}; */
                
                /* padding:  1rem 1rem; */

                &:hover {
                    background: rgb(215,55,93);
                    background: linear-gradient(90deg, rgba(215,55,93,1) 19%, rgba(16,51,188,1) 60%, rgba(12,23,49,1) 96%, rgba(12,23,49,1) 100%);
                    border-radius: 50px;
                    transition: .5s;

                .message__body {
                    background-color: transparent;
                }
                }

                &__wrap {
                    height: 100%;
                    
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                }

                &__user-image {
                    height: 100%;
                    
                    img {
                        height: 50px;
                        width: 50px;
                        object-fit: cover;
                        border-radius: 100%;
                        margin: .2rem .75rem;
                    }
                }

                &__body {
                    display: flex;
                    flex-direction: column;
                    background-color: ${appConfig.theme.colors.primary['700']};
                    border-radius: 10px;
                    padding-left: .75rem;
                    word-break: break-word;

                    & > * {
                        padding: .5rem;
                        margin: 0 .5rem;
                        padding-right: 3rem;
                    }
                }

                &__from {
                    text-transform: capitalize;
                    font-size: .8rem;
                    color: ${appConfig.theme.colors.neutrals['400']};
                    font-family: 'Mulish', sans-serif;
                    font-weight: 600;
                }

                &__text {
                    height: 100%;
                    width: 100%;
                    font-family: 'Mulish', sans-serif;
                    font-weight: 200;

                    img {
                        /* Image Sticker/Gif */
                        height: 150px;
                        width: 150px;
                        object-fit: cover;
                    }

                    @media (max-width: 767px) {
                        .message__text {
                            display: none;
                            img {
                                display: none;
                            }
                        }
                    }
                }
            }

            .from {
                margin-right: 1rem;
                color: ${appConfig.theme.colors.neutrals['900']};
            }
        }
    }



`;


