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
        }

        &__sidebar {
            background-color: ${appConfig.theme.colors.primary['500']};
            flex: 1 1 0;
        }

        &__content {	
            background-color: ${appConfig.theme.colors.primary['200']};
            flex: 3 1 0;
        }
    }

    @media (min-width: 768px) {
        .chat__wrap {
            height: 90%;
            width: 90%;
        }
    }
`;

 