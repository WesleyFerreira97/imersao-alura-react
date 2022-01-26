import css from 'styled-jsx/css';
import appConfig from '../config.json';

export const Background = css`

    .bg-overall {
        height: 100vh;
        width: 100vw;
        position: absolute;
        background-color: ${appConfig.theme.colors.neutrals['200']};
        z-index: -1;
    }

    .footer-wave {
        height: 60vh;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: ${appConfig.theme.colors.primary['800']};
        z-index: -1;
    }

    @media (min-width: 768px) {
        .footer-wave {
            height: inherit;

        }
    }
`;

export const Logo = css`
    .logo-wrap {
        z-index: 20;
        padding: 1.25rem;
    }
    .logo {
        font-size: 3rem;
        font-family: 'Maven Pro', sans-serif;
        color: ${appConfig.theme.colors.neutrals['000']};
    }
`;