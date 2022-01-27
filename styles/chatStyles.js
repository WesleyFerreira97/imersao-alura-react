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
            overflow: hidden;
            /* display: grid;
            grid-template-columns: 1fr 1fr; */
        }

        &__sidebar {
            background-color: ${appConfig.theme.colors.neutrals['400']};
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
               /* border-radius: 5px 50px 5px; */
            }

            &-tabs {
                height: 80%;
                width: 100%;
                overflow: hidden;

                .container-wrap {
                    white-space: nowrap;
                    transition: transform 0.3s;
                    height: 100%;

                    & > * {
                        height: 100%;
                        width: 100%;
                        display: inline-flex;
                        white-space: normal;
                        border: 2px solid red;
                    }
                }
            }
        }

        &__content {	
            background-color: ${appConfig.theme.colors.primary['300']};
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
            /* position: absolute;
            left: 0;
            bottom: 0; */
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
                color: ${appConfig.theme.colors.neutrals['000']};
                font-family: 'Maven Pro', sans-serif;
                font-size: .8rem;

                &:hover {
                    background: ${appConfig.theme.colors.neutrals['500']};
                    color: ${appConfig.theme.colors.primary['800']};
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
                flex: 1 1 30%;
            }

            &__content {
                flex: 3 1 70%;
            }
        }
    }

`;

 