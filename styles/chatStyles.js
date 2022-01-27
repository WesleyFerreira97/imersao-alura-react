import css from 'styled-jsx/css';
import appConfig from '../config.json';

export const Background = css`

    .background {
        height: 100vh;
        width: 100vw;
        position: relative;
        overflow: hidden;
        background-color: ${appConfig.theme.colors.primary['300']};

        &::before {
            content: '';
            top: -50%;
            position: absolute;
            height: 200%;
            width: 200%;
            background-color: ${appConfig.theme.colors.primary['900']};
            transform: rotate(-35deg);
        }
    }

    .chat {
        height: 100%;
        width: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &__wrap {
            height: 95%;
            width: 95%;
            background-color: ${appConfig.theme.colors.primary['800']};
            display: flex;
            flex-direction: column;
        }

        &__sidebar {
            flex: 1 1 10%;
            background-color: ${appConfig.theme.colors.neutrals['400']};

            &-header {
               height: 20%;
               width: 100%;
                /* border-radius: 5px 50px 5px; */
                overflow: hidden;
                display: flex;
                align-items: center;
                padding: 1.25rem;
                background-color: ${appConfig.theme.colors.primary['700']};
            }
        }

        &__content {	
            flex: 3 1 90%;
            background-color: ${appConfig.theme.colors.primary['300']};
        }
    }

    .header {

        &__wrap {
            display: flex;
            align-items: center;
        }

        &__image {
            height: 80px;
            width: 80px;
            border-radius: 100%;
            object-fit: cover;
        }

        &__username {
            font-size: 1.1rem;
            font-family: 'Maven Pro', sans-serif;
            color: ${appConfig.theme.colors.neutrals['000']};
            margin-left: 1.25rem;
        }
    }

    @media (min-width: 768px) {

        .chat {

            &__wrap {
                height: 90%;
                width: 90%;
                flex-direction: row;
            }

            &__sidebar {
                flex: 1 1 30%;
            }

            &__content {
                flex: 3 1 70%;
            }
        }
    }
`;

 