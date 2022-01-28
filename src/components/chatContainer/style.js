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
            padding: 1.25rem;
            background-color: ${appConfig.theme.colors.primary['700']};
        }

        .contact-info__image {
            height: 30px;
            width: 30px;
            border-radius: 100%;
        }

        .contact-info__username {
            color: ${appConfig.theme.colors.neutrals['100']};
            font-size: 1.25rem;
            font-family: 'Maven Pro', sans-serif;
            font-weight: 400;
        }

        &__chat-content {
            height: 80%;
            width: 100%;
        }

        &__input-bar {
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;
            background-color: ${appConfig.theme.colors.primary['700']};
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

        .chat-content__message {

            li {
                color: ${appConfig.theme.colors.neutrals['100']};
                padding: .25rem;
            }
        }
    }

`;