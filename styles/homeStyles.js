import css from 'styled-jsx/css';
import appConfig from '../config.json';

export const Background = css`

.footer-wave {
        height: 77vh;
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: -1;
        background-color: ${appConfig.theme.colors.primary['800']};
    }

`;

export const Logo = css`
    .logo-wrap {
        padding: 1.25rem;
        z-index: 11;
    }
    .logo {
        font-size: 2rem;
        font-family: 'Maven Pro', sans-serif;
        color: ${appConfig.theme.colors.neutrals['000']};
    }
`;


export const LoginWrap = css`
    .login {
        height: 70vh;
        width: 95vw;
        display: flex;
        justify-content: center;
        /* background: ${appConfig.theme.colors.primary['700']}; */
        z-index: 60;
    }

    .login-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75%;
    }

    .login-form, .login-image {
        flex: 1 1 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-form {
        /* background-color: ${appConfig.theme.colors.primary['300']}; */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 1rem;
    }

    button span{
        font-size: 3rem !important;
    }

    .login-title {
        font-size: 2.5rem;
        font-family: 'Maven Pro', sans-serif;
        /* color: ${appConfig.theme.colors.primary['600']}; */
    }

    .login-image {
        height: 35vh;
        order: -1;
        /* background-color: ${appConfig.theme.colors.primary['600']}; */
    }


    .login-image img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }

    @media (min-width: 768px) {
        .login {
            width: 60vw;
            flex-direction: row;
        }

        .login-wrap {
            width: 50%;
        }
        
    }
`;