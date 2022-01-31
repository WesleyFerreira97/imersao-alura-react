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
            height: 60px;
            width: 100%;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 4rem;
            background-color: ${appConfig.theme.colors.primary['800']};
            border-bottom: 1px solid ${appConfig.theme.colors.primary['600']};
        }

        @media (max-width: 992px) {
            .chat-container__contact-info {
                padding: 1.25rem 1rem;
            }
        }

        .contact-info__image {
            height: 100%;
            width: 100%px;
            margin-right: 1rem;
            display: flex;
            align-items: center;

            img {
                height: 40px;
                width: 40px;
                object-fit: cover;
                border-radius: 100%;
            }

            .return-button {
                color: white;
                font-size: 1.5rem;
                background-color: transparent;
                border: none;
                cursor: pointer;
                margin-right: 1rem;
            }
        }

        .contact-info__username {
            color: ${appConfig.theme.colors.neutrals['100']};
            font-size: 1rem;
            font-family: 'Maven Pro', sans-serif;
            font-weight: 400;
            text-transform: capitalize;
        }

        .contact-info__return-button {
            background-color: ${appConfig.theme.colors.primary['900']};
            border: none;
            border-radius: 10px;
            
            &:hover {
                background-color: ${appConfig.theme.colors.primary['800']};
                transform: scale(.9);
            }
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


        .contact-info__logout {
            color: ${appConfig.theme.colors.neutrals['100']};
            background-color: ${appConfig.theme.colors.primary['700']};
            border: none;
            padding: .5rem;
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
        background-color: #0C1731;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='428' height='428' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23142752' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2313264F'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E");

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
                        height: 110px;
                        width: 110px;
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


