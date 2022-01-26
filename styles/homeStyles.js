import css from 'styled-jsx/css';
import appConfig from '../config.json';

export const Background = css`

.footer-wave {
        height: 60vh;
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: -1;
        background-color: ${appConfig.theme.colors.primary['800']};
    }

    @media (min-width: 768px) {
        .footer-wave {
            height: inherit;

        }
    }
`;

export const Logo = css`
    .logo-wrap {
        padding: 1.25rem;
        z-index: 11;
    }
    .logo {
        font-size: 3rem;
        font-family: 'Maven Pro', sans-serif;
        color: ${appConfig.theme.colors.neutrals['000']};
    }
`;