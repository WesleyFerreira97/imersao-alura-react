import css from 'styled-jsx/css';
import appConfig from '../config.json';

export const Background = css`

    .container {
        height: 100vh;
        width: 100vw;
        position: relative;
        overflow: hidden;
        background-color: ${appConfig.theme.colors.primary['300']};

    }
`;

export const ChatStyles = css`
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
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            background-color: ${appConfig.theme.colors.primary['800']};
        }

        &__sidebar {
            background-color: ${appConfig.theme.colors.primary['700']};
            height: 100%;

            &-header {
               height: 20%;
               width: 100%;
               display: flex;
               align-items: center;
               position: relative;
               overflow: hidden;
               background-color: ${appConfig.theme.colors.primary['700']};
               padding: 1.25rem;
            }

            &-tabs {
                height: 80%;
                width: 100%;
                overflow: hidden;

                .container {
                    
                    &-wrap {
                    white-space: nowrap;
                    transition: transform 0.3s;
                    height: 100%;

                        & > * {
                            height: 100%;
                            /* width: 100%;
                            display: inline-flex;
                            white-space: normal; */
                            overflow-y: scroll;

                            ::-webkit-scrollbar {
                                width: 5px;
                            }
                            
                            ::-webkit-scrollbar-track {
                                background-color: ${appConfig.theme.colors.primary['800']};
                            }

                            ::-webkit-scrollbar-thumb {
                                -webkit-border-radius: 10px;
                                border-radius: 10px;
                                background: #6d6d6d; 
                            }
                        }
                        
                    }
                }
            }

            .container-contacts {
                padding: .3rem
            }
        }
    }

    
    .container-other {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        white-space: normal;
        
        span {
            padding-right: 1rem;
            font-family: 'Maven Pro', sans-serif;
            font-size: 1.3rem;
        }

    }

    .header {

        &__wrap {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
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

        &__search {
            height: 30%;
            width: 100%;
            background-color: ${appConfig.theme.colors.primary['800']};
        }

        &__tabs {
            height: 30%;
            width: 100%;
            display: flex;
            align-items: center;
            /* justify-content: center; */
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: ${appConfig.theme.colors.primary['800']};
            padding-left: 1.25rem;
            
            .tabs__item {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 1rem;
                color: ${appConfig.theme.colors.neutrals['500']};
                font-family: 'Maven Pro', sans-serif;
                font-size: .8rem;

                &:hover {
                    background: ${appConfig.theme.colors.primary['700']};
                    color: ${appConfig.theme.colors.neutrals['100']};
                    font-weight: 500;
                }
            }
        }

    }

    @media (min-width: ${appConfig.theme.breakpoints.lg}) {

        .chat {

            &__wrap {
                height: 90%;
                width: 90%;
                flex-direction: row;
            }

            &__sidebar {
                flex: 0 0 30%;
                
            }

            &__content {
                flex: 3 1 70%;
            }
        }
    }

    @media (min-width: 992px) {
        .chat__sidebar {
            max-width: 30%;
        }
    }

`;

export const ChatContent = css`
    .chat__content {
        height: 100%;
        width: 100%;
        position: relative; 
        /* Temporario 
            Mobile - Absolute é disparado por click 
            Desktop - Absolute é removido
        */

        &-wrap {
            height: 100%;
            width: 100%;
            background-color: ${appConfig.theme.colors.primary['800']};
            transform: translateY(100%);
            transition: transform 0.5s;
            /*  Temporario
                Mobile - transform: translateY(100%);
                Desktop - Remove transform
             */
        }
    }

    @media (min-width: ${appConfig.theme.breakpoints.lg}) {
        .chat__content {
            position: relative !important;

            &-wrap {
                transform: translateY(0);
            }
        }
    }
`;



